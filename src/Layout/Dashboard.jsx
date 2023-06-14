import {Outlet,NavLink, useNavigate} from "react-router-dom";

import { FaHome} from 'react-icons/fa';
import useAdmin from "../Components/Hooks/useAdmin";
import useInstructor from "../Components/Hooks/useInstructor";
import { useEffect } from "react";
const Dashboard = () => {
  // const isAdmin=true;
  // const isInstructor=true;
  const navigate = useNavigate();
  const [isAdmin]=useAdmin()
  const [isInstructor]=useInstructor()

  useEffect(() => {
    // Determine the initial route based on the user's role
    let initialRoute = '';

    if (isAdmin) {
      initialRoute = '/dashboard/allusers';
    } else if (isInstructor) {
      initialRoute = '/dashboard/addclass';
    } else {
      initialRoute = '/dashboard/myclasses';
    }

    // Redirect to the initial route when entering the dashboard
    navigate(initialRoute);
  }, [isAdmin, isInstructor, navigate]);
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-slate-800 text-white">
    {
      isAdmin ?<>
         <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home </NavLink></li>
         <li><NavLink to="/dashboard/manageclass"> Manage Classes </NavLink></li>
      <li><NavLink to="/dashboard/allusers"> Manage Users </NavLink></li>
      </>: isInstructor?<>
      {/* <li><NavLink to="/dashboard/instructorshome"><FaHome></FaHome>Instructors Home </NavLink></li> */}
      <li><NavLink to="/dashboard/addclass"> Add Class </NavLink></li>
      <li><NavLink to="/dashboard/myclass"> My Classes </NavLink></li>
      <li><NavLink to="/dashboard/enrollstudents"> Total Enrolled Students </NavLink></li>
      </>:
      <>
        <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home </NavLink></li>
      <li><NavLink to="/dashboard/myclasses"> My Selected Classes </NavLink></li>
      <li><NavLink to="/dashboard/enroll"> My Enrolled Classes </NavLink></li>
      <li><NavLink to="/dashboard/history"> Payment History </NavLink></li>
     
      </>
    }

   
     
      <div className="divider"></div>

    <li>
      <NavLink to="/">
      <FaHome></FaHome>Home
       </NavLink>
    </li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
