import { Button, Stack } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";
import IUser from "./types";
import axiosWebClient from "../../services/axiosWebClient";
import { useAppSelector } from "../../redux";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = React.useState<IUser>();
  const { users, test } = useAppSelector((state) => state.user);

  const handleViewTeam = () => {
    // navigate(`/user/${id}/team`);

    navigate(`/user/${id}/team`, { state: { from: `user/${id}` } });
  };

  const getData = () => {
    axiosWebClient.get(`users/${id}`).then((response) => {
      setUser(response.data);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Stack>
      UserDetails : {JSON.stringify(user)}
      <Button variant="contained" onClick={handleViewTeam}>
        View Team Members
      </Button>
      <Link to="/users">Back</Link>
      Users : {JSON.stringify(users)}
    </Stack>
  );
};

export default UserDetails;
