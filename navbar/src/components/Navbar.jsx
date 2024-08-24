import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const menus = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="bg-slate-950 text-white grid grid-cols-3 items-center px-10 py-3">
      <img src={logo} alt="React" className="h-6 w-6" />
      <div className="flex items-center justify-center gap-10 font-light">
        {menus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            className={({ isActive }) =>
              `select-none p-2 duration-300 border-b-2 ${
                isActive
                  ? "font-bold text-slate-300 border-green-500"
                  : "font-light border-transparent hover:border-red-500"
              }`
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center justify-end gap-5">
        <FaSearch className="h-5 w-5 cursor-pointer" />
        <FaRegUserCircle className="h-7 w-7 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
