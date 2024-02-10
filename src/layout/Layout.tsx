import { Stack } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

interface LayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Stack>
        <ResponsiveAppBar />
        {children}
      </Stack>
    </>
  );
};

export default Layout;
