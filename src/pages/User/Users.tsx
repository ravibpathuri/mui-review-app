import React from "react";
import { Box, Button, LinearProgress, Stack, Table } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux";
import axiosWebClient from "../../services/axiosWebClient";
import { clearUsers, setUsers } from "./User.slice";
import IUser from "./types";

const Users = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(false);

  const { users } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getData = React.useCallback(() => {
    setLoading(true);
    axiosWebClient
      .get("users")
      .then((response) => {
        dispatch(setUsers(response.data));
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  React.useEffect(() => {
    if (users?.length === 0) getData();
  }, [getData]);

  if (loading) {
    return <LinearProgress />;
  }

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 250 },
    { field: "email", headerName: "E-Mail", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => <Link to={`/user/${params.row.id}`}>View</Link>,
    },
  ];

  return (
    <Stack>
      Users : {searchParams.get("active")}
      <Button
        variant="contained"
        onClick={() => setSearchParams({ active: "true" })}
      >
        Show Active Users
      </Button>
      <Button
        variant="contained"
        onClick={() => setSearchParams({ active: "false" })}
      >
        Hide All Users
      </Button>
      <Button variant="contained" onClick={() => navigate("/user/new")}>
        Add User
      </Button>
      <Button variant="contained" onClick={() => dispatch(clearUsers())}>
        Clear Users
      </Button>
      <Table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
          {users?.map((user: IUser) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/user/${user.id}`}>View</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Box>
        <DataGrid
          rows={users || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          checkboxSelection={true}
          disableRowSelectionOnClick={false}
        />
      </Box>
    </Stack>
  );
};

export default Users;
