import React from 'react';
import gitlogo from '../../assets/GitLogo.png';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to={'/'}>
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to={'/apps'}>
              <li>
                <a>Apps</a>
              </li>
            </NavLink>
            <NavLink to={'/installation'}>
              <li>
                <a>Installation</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Hero.io Logo"
            className="w-10 h-10 inline-block mr-2"
          />
          <Link to={'/'}>
            <a className=" text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              HERO.IO
            </a>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-md">
          <NavLink to={'/'}>
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to={'/apps'}>
            <li>
              <a>Apps</a>
            </li>
          </NavLink>
          <NavLink to={'/installation'}>
            <li>
              <a>Installation</a>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/'}>
          <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-4 text-white rounded-lg font-semibold flex items-center gap-2">
            <img src={gitlogo} alt="GitHub Logo" className="w-5 h-5" />
            <li>Contribute</li>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
