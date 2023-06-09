import {Outlet,NavLink} from "react-router-dom";
import { FaHome} from 'react-icons/fa';
const Dashboard = () => {
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
    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home </NavLink></li>
      <li><NavLink to="/dashboard/myclasses"> My Selected Classes </NavLink></li>
      <li><NavLink to="/dashboard/enroll"> My Enrolled Classes </NavLink></li>
     
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