import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { menu } from "../../../Utils/routes";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 w-full py-[1.3rem] px-[2%] lg:py-5 lg:px-[2%] flex gap-2 lg:justify-between items-center z-[100] before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-dark-background-color before:z-[-1] shadow-xl shadow-gradient-back ">
      <Link to="/" className="text-2xl md:text-2xl text-white font-bold">
        <span className="text-primary-color">Dream</span>School
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
        } top-full  absolute left-0 w-full z-[100] bg-dark-background-color shadow-2xl shadow-gradient-back transition-all duration-500 lg:h-auto lg:static lg:w-auto lg:bg-inherit lg:backdrop-blur-0 lg:shadow-none delay-700 lg:delay-0`}
      >
        <ul className="lg:flex lg:gap-6">
          {menu?.map((route) => (
            <li
              key={route?.id}
              className={`${
                isOpen
                  ? "translate-y-0 transition-all duration-300"
                  : "translate-y-[-50px] transition-all duration-500"
              } text-light-color font-bold text-sm lg:text-sm my-[1.5rem] lg:my-0 mx-0 lg:ml-10 block text-center duration-500 transition lg:translate-y-0 `}
            >
              <NavLink
                onClick={() => setIsOpen(!isOpen)}
                to={route?.path}
                className={({ isActive }) =>
                  `px-2 py-3 block ${
                    isActive ? "text-primary-color" : ""
                  } hover:text-primary-color`
                }
              >
                {route?.name}
              </NavLink>
            </li>
          ))}
          <div className="lg:hidden flex justify-center items-center flex-col pb-5">
            <Button text="LogIn" whiteText />
            <Button text="JOIN US" icon={<FaArrowRight />} withBg />
          </div>
        </ul>
      </nav>
      <div className="lg:flex hidden">
        <Button text="LogIn" whiteText />
        <Button text="JOIN US" withBg icon={<FaArrowRight />} />
      </div>
      {/* <div className="dropdown dropdown-end">
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
      </div> */}
    </header>
  );
};

export default Navbar;
