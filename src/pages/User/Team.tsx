import React from "react";
import { useLocation } from "react-router-dom";

type TeamProps = {};

const Team: React.FC<TeamProps> = () => {
  const { state } = useLocation();
  console.log("state", state);
  return <>Team :</>;
};

export default Team;
