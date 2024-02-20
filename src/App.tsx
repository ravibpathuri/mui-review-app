import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LinearProgress } from "@mui/material";

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
