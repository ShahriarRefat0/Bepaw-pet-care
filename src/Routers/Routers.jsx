import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import ServiceDetails from "../Pages/ServiceDetails";
import SignUp from "../Pages/SignUp";
import LoginPage from "../Pages/LoginPage";
import Profile from "../Pages/Profile";
import PrivetRout from "../PrivetRout/PrivetRout";
import PassResetForm from "../Pages/PassResetForm";
import AllServices from "../Pages/AllServices";
import ContactUs from "../Pages/ContactUs";
import Error from "../Pages/Error";
import AboutUs from "../Pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/service-details/:id",
        element: (
          
            <ServiceDetails></ServiceDetails>
         
        ),
      },
      {
        path: "/password-reset",
        element: <PassResetForm></PassResetForm>,
      },
      {
        path: "/all-service",
        element:<AllServices></AllServices>
      },
      {
        path: "contactUs",
        element:<ContactUs></ContactUs>
      },
      {
        path: "aboutUs",
        element:<AboutUs></AboutUs>
      },
    ],
  },

  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
