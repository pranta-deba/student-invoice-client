import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/root";
import Home from "../pages/home";
import StudentRegister from "../pages/dashboard/student-register";
import StudentPayment from "../pages/dashboard/student-payment";
import StudentInformation from "../pages/dashboard/student-information";

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
        path: "dashboard/total-student",
        element: "total student",
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
      {
        path: "dashboard/payment-info",
        element: "payment-info",
      },
    ],
  },
]);
