import React, { lazy } from "react";
import {
  Navigate,
  Outlet,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";

// lazy loading
const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const Game = lazy(() => import("./pages/Game/Game"));
const Layout = lazy(() => import("./layout/Layout"));
const UserDetails = lazy(() => import("./pages/User/UserDetails"));
const Users = lazy(() => import("./pages/User/Users"));
const Team = lazy(() => import("./pages/User/Team"));
const Settings = lazy(() => import("./pages/Settings/settings"));

const PrivateRoutes = () => {
  let signedIn = true;

  const location = useLocation();

  return signedIn ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "welcome", element: <Welcome /> },
      { path: "game", element: <Game /> },
      { path: "users", element: <Users /> },
      {
        path: "user/:id",
        element: <UserDetails />,
      },
      {
        path: "user/:id/team",
        element: <Team />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <>TODO: Login page</>,
  },
  {
    path: "/sign-up",
    element: <>TODO: Register page</>,
  },
  {
    path: "/not-found",
    element: <>TODO: 404 page</>,
  },
]);

export { router };
