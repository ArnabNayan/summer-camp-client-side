import { Link } from "react-router-dom";


const Navbar = () => {
    const navOption=<>
        <li className="font-serif text-lg"><Link to="/">Home</Link> </li>
        <li  className="font-serif text-lg"><Link to="/instructors">Instructors</Link> </li>
        <li  className="font-serif text-lg"><Link to="/classes">Classes</Link> </li>
    </>
    return (
        <div className="navbar fixed h-20 z-10 bg-opacity-30 max-w-screen-xl mx-auto bg-slate-600 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
             {navOption}
            </ul>
          </div>
          <div className="flex">
            <div>
                 <img className="rounded-full w-20 h-20" src="https://static.wixstatic.com/media/2daf25_bc115df63a7f45db97c27a9e77a680d1~mv2_d_1562_1562_s_2.jpg/v1/fill/w_2500,h_2500,al_c/2daf25_bc115df63a7f45db97c27a9e77a680d1~mv2_d_1562_1562_s_2.jpg" alt="" />
            </div>
            <div>
            <a className="btn btn-ghost normal-case text-2xl font-serif pt-2 ">Sports Academy</a> 
            </div>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navOption}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;