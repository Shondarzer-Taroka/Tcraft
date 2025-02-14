import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import '../../../Components/Style/Nav/Nav.css'
import 'react-tooltip/dist/react-tooltip.css'
import '../../../Components/Style/imgcont/imgcont.css'


import { FaUser } from "react-icons/fa";
const NavBar = () => {
  let { user, logout, spinner } = useContext(AuthContext)
  // console.log(user);
  const navlinks = <>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/allcraft'}>All Art & craft Items</NavLink>
    <NavLink to={'/addcraft'}>Add Craft Item</NavLink>
    <NavLink to={'/mycraft'}>My Art&Craft List</NavLink>
  </>

  function logUtFromFireBase() {
    logout()
      .then(() => { })
      .catch(er => {
        console.log(er);
      })
  }
  return (
    <div >
      <div id="navbar" className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn p-2 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu z-50 menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <h className=" text-xl flex gap-0 items-end font-poppins" > <span className="font-bold text-4xl text-orange-600">T</span> <span className="text-[#30cfd0]">craft</span> </h>
        </div>
        <div className="navbar-center hidden z-50 lg:flex">
          <ul className="menu  menu-horizontal flex gap-3 px-1 ">
            {navlinks}
          </ul>
        </div>
        <div id="navbar-end" className="navbar-end">

          {/* {spinner ? <h2>loading</h2> : user ? <> <div className="h-[50px] w-[50px] "> {user?.photoURL ? <div className="w-full h-full relative" id="img-contaner">  <img className="w-full h-full border rounded-full" src={user.photoURL} alt="" />

            <div id="namebtn" className="w-[150px] h-[max-content] p-4 border-2 absolute left-[-100px] z-50 hidden">
              <p className="font-semibold"> {user?.displayName} </p>
              <button onClick={logUtFromFireBase} className="btn btn-info mt-4">Log Out</button>
            </div>

          </div> : <div>  <div className="w-full h-full relative" id="img-contaner">  <span> <FaUser></FaUser> </span>

            <div id="namebtn" className="w-[150px] h-[max-content] p-4 border-2 absolute left-[-100px] z-50 hidden">
              <p className="font-semibold"> {user?.displayName} </p>
              <button onClick={logUtFromFireBase} className="btn btn-info mt-4">Log Out</button>
            </div>

          </div> 
          
          
          <div id="namebtn" className="w-[150px] h-[max-content] p-4 border-2 absolute left-[-100px] z-50 hidden">
              <p className="font-semibold"> {user?.displayName} </p>
              <button onClick={logUtFromFireBase} className="btn btn-info mt-4">Log Out</button>
            </div>
          </div>

          } </div></> : <div className="flex gap-2">
            <Link to={'/login'}> <button className="btn btn-info">Log In</button> </Link>
            <Link to={'/register'}> <button className="btn btn-info">Register</button> </Link>

          </div>} */}


{spinner ? <h2><span className="loading loading-spinner text-primary"></span> </h2> : user ? <div className="h-[50px] w-[50px] "> {user?.photoURL ? <div className="w-full h-full relative" id="img-contaner">  <img className="w-full h-full border rounded-full" src={user.photoURL} alt="" />

<div id="namebtn" className="w-[150px] h-[max-content] p-4 border-2 absolute left-[-100px] z-50 hidden">
  <p className="font-semibold"> {user?.displayName} </p>
  <button onClick={logUtFromFireBase} className="btn btn-info mt-4">Log Out</button>
</div>

</div> : <div>  <div className="w-full h-full relative" id="img-contaner">  <span> <FaUser></FaUser> </span>

<div id="namebtn" className="w-[150px] h-[max-content] p-4 border-2 absolute left-[-100px] z-50 hidden">
  <p className="font-semibold"> {user?.displayName} </p>
  <button onClick={logUtFromFireBase} className="btn btn-info mt-4">Log Out</button>
</div>

</div> 


<div id="namebtn" className="w-[150px]  border-2 absolute left-[-100px] z-50">
  <div className="flex items-center">
      <p className="font-semibold"> {user?.displayName} </p>
  <button onClick={logUtFromFireBase} className="btn btn-info mt-4">Log Out</button>
  </div>

</div>
</div>

} </div>: <div className="flex gap-2">
<Link to={'/login'}> <button className="btn btn-info">Log In</button> </Link>
<Link to={'/register'}> <button className="btn btn-info">Register</button> </Link>

</div>}

        </div>
      </div>
    </div>
  );
};

export default NavBar;