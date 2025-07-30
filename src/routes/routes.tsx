import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/root";
import Home from "../pages/home";
import StudentRegister from "../pages/dashboard/student-register";
import StudentPayment from "../pages/dashboard/student-payment";
import StudentInformation from "../pages/dashboard/student-information";
import AllStudent from "../pages/dashboard/all-student";

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
        path: "dashboard/all-student",
        element: <AllStudent />,
      },
      {
        path: "dashboard/student-info",
        element: <StudentInformation />,
      },
      {
        path: "dashboard/register",
        element: <StudentRegister />,
      },
      {
        path: "dashboard/payment",
        element: <StudentPayment />,
      },
    ],
  },
]);
