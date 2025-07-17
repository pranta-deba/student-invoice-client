import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/root";
import Home from "../pages/home";
import Auth from "../pages/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);
