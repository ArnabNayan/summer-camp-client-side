import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructor/Instructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../Pages/Dashboard/MyClasses";
import PrivateRoute from "./PrivateRoute";
import Allusers from "../Pages/Dashboard/Allusers";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClass from "../Pages/Dashboard/MyClass";
import ManageClass from "../Pages/Dashboard/ManageClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import History from "../Pages/Dashboard/History";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        },
       
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'myclasses',
          element:<MyClasses></MyClasses>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'allusers',
          element:<AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
          path:'manageclass',
          element:<AdminRoute><ManageClass></ManageClass> </AdminRoute>
        },
        {
          path:'addclass',
          element:<AddClass></AddClass>
        },
        {
          path:'myclass',
          element:<MyClass></MyClass>
        },
        {
          path:'history',
          element:<History></History>
        }
      ]
    }
  ]);