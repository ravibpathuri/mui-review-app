import { Button } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";
import IUser from "./types";
import axiosWebClient from "../../services/axiosWebClient";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = React.useState<IUser>();

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
    <div>
      UserDetails : {JSON.stringify(user)}
      <Button variant="contained" onClick={handleViewTeam}>
        View Team Members
      </Button>
      <Link to="/users">Back</Link>
    </div>
  );
};

export default UserDetails;
