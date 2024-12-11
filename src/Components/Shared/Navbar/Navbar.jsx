import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-xl font-semibold"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "transparent" : "",
              color: isActive ? "#8D5CF6" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/product"
          className="text-xl font-semibold"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "transparent" : "",
              color: isActive ? "#8D5CF6" : "",
            };
          }}
        >
          Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className="text-xl font-semibold"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "transparent" : "",
              color: isActive ? "#8D5CF6" : "",
            };
          }}
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="text-xl font-semibold"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "transparent" : "",
              color: isActive ? "#8D5CF6" : "",
            };
          }}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
