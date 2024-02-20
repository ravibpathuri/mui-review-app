import React from "react";
import { useUserSettingsContext } from "../../context/UserContext";
import {
  Button,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  Box,
} from "@mui/material";
import { useAppSelector } from "../../redux";
import { Link } from "react-router-dom";

const Settings = () => {
  const context = useUserSettingsContext();
  const { users } = useAppSelector((state) => state.user);
  return (
    <Box>
      settings : {context.userSettings.theme}
      <Button
        variant="contained"
        onClick={() => context?.setUserSettings({ theme: "dark" })}
      >
        Set Dark Theme
      </Button>
      <Button
        variant="outlined"
        onClick={() => context?.setUserSettings({ theme: "light" })}
      >
        Set Light Theme
      </Button>
      <Link to="/users">Users</Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">e-mail</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">UserName</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((row) => (
              <TableRow
                key={row.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.website}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Settings;
