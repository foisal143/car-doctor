import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvaider/AuthProvaider';
const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handlerLogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem('access-token');
      })
      .catch(er => console.log(er.message));
  };
  return (
    <nav className="navbar  h-20 bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/order">Order Review</Link>
            </li>

            <li>
              <Link to="/contuct">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="w-20 h-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/order">Order Review</Link>
          </li>

          <li>
            <Link to="/contuct">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-3 items-center">
        <Link>
          <button className="text-xl">
            <MdOutlineShoppingBag></MdOutlineShoppingBag>
          </button>
        </Link>
        {user?.email && (
          <div className="flex relative gap-3 items-center">
            <h3
              onClick={() => setOpen(!open)}
              className="p-3 bg-[#FF3811] rounded-full cursor-pointer text-white"
            >
              {user?.displayName}
            </h3>
            <button
              onClick={handlerLogout}
              className={`btn-coustom absolute -bottom-12 -right-5 hover:bg-black ${
                open ? 'block' : 'hidden'
              }`}
            >
              Logout
            </button>
          </div>
        )}
        <button className="btn btn-outline btn-secondary">Appointment</button>
      </div>
    </nav>
  );
};

export default Header;
