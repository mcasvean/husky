import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import ProtectedRoute from "./auth/ProtectedRoute";

// Lazy loading pages
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Reducer = lazy(() => import("./pages/Reducer"));
const ReducerSecond = lazy(() => import("./pages/ReducerSecond"));
const ReducerSecondDetails = lazy(() => import("./components/ReducerSecond/ReducerSecondDetails/ReducerSecondDetails"));
const Redux = lazy(() => import("./pages/Redux"));
const ReduxTasks = lazy(() => import("./pages/ReduxTasks"));

const router = createBrowserRouter([
  // Public routes
  {
    path: "login",
    element: <Login />,
  },
  // Protected routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "reducer",
            element: <Reducer />,
          },
          {
            path: "reducer-second",
            element: <ReducerSecond />,
          },
          {
            path: "reducer-second/:id",
            element: <ReducerSecondDetails />,
          },
          {
            path: "redux",
            element: <Redux />,
          },
          {
            path: "redux-tasks",
            element: <ReduxTasks />,
          },
        ],
      },
    ],
  },
  // Fallback for random url
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
