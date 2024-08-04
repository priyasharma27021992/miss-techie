import { useState } from "react";
import PriyaResume from "../assets/priya-sharma-resume-2024.pdf";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(true);
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  console.log("pathname", pathname);
  const toggleMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            className="rounded-t-lg max-w-20 hidden sm:block"
            src="miss-techie-logo.jpg"
            alt="Miss Techie logo"
          />
          <span className="self-center text-2xl whitespace-nowrap dark:text-white">
            Miss Techie In-Progress
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={`${openMobileMenu ? true : false}`}
          onClick={toggleMenu}
          onMouseLeave={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            openMobileMenu ? "block w-full" : "hidden"
          } md:block md:w-auto relative`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col items-baseline p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${
              openMobileMenu &&
              "absolute right-0 w-full items-center md:relative md:w-auto"
            }
          bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          >
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 text-xl ${
                  pathname === "" ? "underline" : ""
                } rounded md:bg-transparent md:p-0 dark:text-white hover:text-blue-700`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`block py-2 px-3 text-xl rounded ${
                  pathname === "projects" ? "underline" : ""
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-900 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 text-xl  rounded ${
                  pathname === "contact" ? "underline" : ""
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to={PriyaResume}
                download
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold py-2 px-4 rounded-2xl inline-flex items-center">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download Resume</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
