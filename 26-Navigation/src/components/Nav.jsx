import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { MenuData } from "../data/MenuData";
import { MdOutlineClose } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative z-10">
      <nav className="h-20 bg-gradient-to-br from-slate-50 to-gray-50 flex items-center p-8">
        <MdMenu
          className={`text-2xl font-bold ${showMenu ? "hidden" : "block"}`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <MdOutlineClose
          className={`text-2xl font-bold ${showMenu ? "block" : "hidden"}`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </nav>
      <aside
        className={` absolute z-20 w-40 h-screen pt-5 ${
          showMenu ? "block" : "hidden"
        } bg-gradient-to-br from-slate-50 to-gray-50 flex justify-center transform transition-all duration-1000`}
      >
        <ul>
          {MenuData.map((d, index) => (
            <li
              key={index}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <Link
                to={d.path}
                className="flex items-center gap-2 text-md font-bold pl-6 w-40 py-3 rounded-md hover:bg-white"
              >
                {d.icon && React.createElement(eval(d.icon))}
                <span>{d.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
