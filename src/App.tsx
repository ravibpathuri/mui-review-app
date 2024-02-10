import { Suspense } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LinearProgress } from "@mui/material";

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <RouterProvider router={router} />
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Suspense>
  );
}

export default App;
