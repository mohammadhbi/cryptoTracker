import { Link } from "react-router-dom";
import cover from "../../assets/cover.png";

export default function Navbar() {
  return (
    <div className="navbar bg-gradient-to-r from-gray-900 to-black text-white shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        {/* Hamburger Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-gray-700 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box mt-2 w-56 p-3 shadow-xl border border-gray-700 transform transition-all duration-300"
          >
            <li>
              <Link
                to="/coins"
                className="text-lg py-2 px-3 hover:bg-cyan-500 hover:text-black rounded-md transition-all duration-200"
              >
                Coin Detail
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="text-lg py-2 px-3 hover:bg-cyan-500 hover:text-black rounded-md transition-all duration-200"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/watchlist"
                className="text-lg py-2 px-3 hover:bg-cyan-500 hover:text-black rounded-md transition-all duration-200"
              >
                Watchlist
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost p-0 hover:bg-transparent">
          <img
            src={cover}
            alt="Mmd Xchange Logo"
            className="w-full sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] mx-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>

      {/* Right Icons */}
      <div className="navbar-end flex items-center space-x-2">
        {/* Search Button */}
        <button className="btn btn-ghost btn-circle hover:bg-gray-700 hover:text-cyan-400 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Notification Button */}
        <button className="btn btn-ghost btn-circle hover:bg-gray-700 hover:text-cyan-400 relative transition-all duration-300">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-error absolute top-0 right-0 animate-pulse"></span>
          </div>
        </button>

        
        <Link to="/signup" className="btn btn-sm bg-cyan-500 text-black hover:bg-cyan-600 transition-all duration-300 rounded-full px-4 hidden sm:flex">
          Get Started
        </Link>
      </div>
    </div>
  );
}