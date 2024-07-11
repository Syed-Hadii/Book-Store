import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import sicon from '../assets/search-icon.png';
import { useAuth } from "../../Context/AuthProvider";

const Navbar = () => {
  const { authUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-pink-700 text-white flex flex-col md:flex-row items-center justify-between p-4 md:p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="nav-logo w-96">
          <NavLink to="/">
            <p className="font-bold text-3xl text-white font-serif">Book Store</p>
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </div>
      <div className={`flex-col md:flex-row md:flex items-center justify-between w-full mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto md:mr-6">
          <ul className="flex flex-col items-center md:flex-row md:space-x-4">
            <li className="mb-2 md:mb-0">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active-link' : 'hover:text-gray-400'}
              >
                Home
              </NavLink>
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink 
                to="/courses" 
                className={({ isActive }) => isActive ? 'active-link' : 'hover:text-gray-400'}
              >
                Course
              </NavLink>
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? 'active-link' : 'hover:text-gray-400'}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'active-link' : 'hover:text-gray-400'}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 md:space-x-4">
          <div className="search-bar flex mb-4 md:mb-0 w-full md:w-auto">
            <input type="text" placeholder="Search" className="border outline-none w-full md:w-40 h-8 rounded-tl-md rounded-bl-md px-4 pb-0.5" />
            <button className="border outline-none h-8 w-10 flex justify-center items-center rounded-tr-md rounded-br-md bg-white hover:bg-slate-100">
              <img src={sicon} alt="" width="20" />
            </button>
          </div>
          {authUser ? (
            <button
              className="login-btn h-8 bg-pink-600 hover:bg-pink-400 text-white font-bold px-2 rounded"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="login-btn h-8 bg-pink-600 hover:bg-pink-400 text-white font-bold px-2 rounded">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
