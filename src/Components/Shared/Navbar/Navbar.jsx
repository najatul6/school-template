import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { menu } from "../../../Utils/routes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 w-full py-[1.3rem] px-[2%] lg:py-5 lg:px-[2%] flex gap-2 lg:justify-between items-center z-[100] before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-gradient-back before:backdrop-blur-[50px] before:z-[-1] shadow-xl shadow-gradient-back ">
      <Link to="/" className="text-2xl md:text-4xl text-white font-bold">
        Dream School
      </Link>

      <label
        htmlFor=""
        className="text-4xl text-white cursor-pointer lg:hidden absolute right-[5%] inline-flex duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </label>
      {/* Navbar Section  */}
      <nav
        className={`${
          isOpen ? "h-[17 rem]" : " h-0 overflow-hidden "
        } top-full  absolute left-0 w-full z-[100] bg-gradient-back backdrop-blur-2xl shadow-2xl shadow-gradient-back transition-all duration-500 lg:h-auto lg:static lg:w-auto lg:bg-inherit lg:backdrop-blur-0 lg:shadow-none delay-700 lg:delay-0`}
      >
        <ul className="lg:flex gap-6">
          {menu?.map((route) => (
            <li
              key={route?.id}
              className={`${
                isOpen
                  ? "translate-y-0 transition-all duration-300"
                  : "translate-y-[-50px] transition-all duration-700"
              } text-white font-medium text-lg lg:text-xl my-[1.5rem] lg:my-0 mx-0 lg:ml-10 block text-center duration-500 transition lg:translate-y-0 `}
            >
              <a href={route?.path} className=" px-2 py-3 block">
                {route?.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" m-1">
          <div className="avatar">
            <div className="ring-primary-color w-10 rounded-full ring ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[110] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
