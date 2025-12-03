import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/logo-1.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userLogout, setLoading } = use(AuthContext);
const navigate = useNavigate()
  // console.log(user.photoURL);

  const handleUserLogout = () => {
    // console.log('out')
    userLogout()
      .then(() => {
        toast.success("LogOut Successfully");
        setLoading(true)
        navigate('/');
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

 
  

  // nav option links
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-service"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to={user ? "/profile" :'/login'}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  // btn show
  const showBtns = user ? (
    <Link
      onClick={handleUserLogout}
      to="/"
      className="bg-[#F8721F] text-white font-semibold px-6 py-2 rounded-xl hover:bg-white hover:text-[#F8721F] border border-[#F8721F] transition-all duration-300"
    >
      Logout
    </Link>
  ) : (
    <>
      <Link
        to="/login"
        className="bg-[#F8721F] text-white font-semibold px-6 py-2 rounded-xl hover:bg-white hover:text-[#F8721F] border border-[#F8721F] transition-all duration-300"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-[#F8721F] text-white font-semibold px-6 py-2 rounded-xl hover:bg-white hover:text-[#F8721F] border border-[#F8721F] transition-all duration-300"
      >
        Register
      </Link>
    </>
  );

  return (
    <div className=" bg-[#ff0000] shadow-sm h-20">
      <div className="navbar text-white w-11/12 mx-auto pt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#1F1F1F] font-semibold  rounded-box z-20 mt-3 w-52 p-2 shadow"
            >
              {links}
              <div className="flex flex-col gap-2 p-2">{showBtns}</div>
            </ul>
          </div>
          <Link
            to="/"
            className="cursor-pointer md:ml-0 flex items-center gap-1.5 sm:gap-2 md:gap-2.5  ml-10 w-full"
          >
            <img
              className="w-12 h-12 md:w-15 md:h-14 xl:w-16 xl:h-16 object-contain shrink-0"
              src={logo}
              alt="Bepaw Logo"
            />
            <div className="text-left flex flex-col w-28 leading-none">
              <h4 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                Bepaw
              </h4>
              <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-400 mt-0.5">
                Pet Care & Shop
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-5">
          {user && (
            <div className="dropdown md:dropdown-start dropdown-end dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="w-12 h-12 rounded-full border border-gray-400 overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src={user?.photoURL}
                  alt="User"
                />
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-[#333333] text-white rounded-lg shadow-md mt-2 w-44 p-2 z-20"
              >
                <li className="text-center">
                  <span className="font-semibold">
                    {user?.displayName || "User"}
                  </span>
                </li>
              </ul>
            </div>
          )}
          <div className="hidden lg:flex gap-4">{showBtns}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
