import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Booking from "../pages/Booking/Booking";
import AllBookings from "../pages/AllBookings/AllBookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/booking/:id',
            element:<PrivateRoute><Booking></Booking></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/allbookings',
            element:<PrivateRoute><AllBookings></AllBookings></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;