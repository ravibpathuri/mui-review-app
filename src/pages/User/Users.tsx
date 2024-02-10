import { Button, LinearProgress, Stack, Table } from "@mui/material";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import axiosWebClient from "../../services/axiosWebClient";
import IUser from "./types";
import { useAppDispatch, useAppSelector } from "../../redux";
import { setUsers } from "./User.slice";

const Users = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(false);

  const { users } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getData = () => {
    setLoading(true);
    axiosWebClient
      .get("users")
      .then((response) => {
        dispatch(setUsers(response.data));
      })
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Stack>
      Users : {searchParams.get("active")}
      <Button onClick={() => setSearchParams({ active: "true" })}>
        Show Active Users
      </Button>
      <Button onClick={() => setSearchParams({ active: "false" })}>
        Hide All Users
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
    </Stack>
  );
};

export default Users;
