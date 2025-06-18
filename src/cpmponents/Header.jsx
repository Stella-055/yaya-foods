import React from "react";
import { MdFoodBank } from "react-icons/md";
import { RiDrinksLine } from "react-icons/ri";
import { CiPizza } from "react-icons/ci";
import { LuSalad } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiHotSpices } from "react-icons/gi";
import { LuCakeSlice } from "react-icons/lu";
const NavLinks = [
  { id: "1", icon: <MdFoodBank />, name: "All" },
  { id: "2", icon: <RiDrinksLine />, name: "Drinks" },
  {
    id: "3",
    icon: <CiPizza />,
    name: "Pizza",
  },
  { id: "4", icon: <LuSalad />, name: "Salad" },
  {
    id: "5",
    icon: <GiHotSpices />,
    name: "Spicy",
  },
  { id: "6", icon: <LuCakeSlice />, name: "Sweets" },
];
const Header = () => {
  return (
    <header>
      <GiHamburgerMenu className="menuicon" />
      <div>
        {NavLinks.map((link, id) => {
          return (
            <div
              className={link.id == 1 ? "navcomponent-active" : "navcomponent"}
              key={id}
            >
              {link.icon}
              <a
                className={`navcomponent-link ${
                  link.id == 1 ? "navcomponent-link-active" : ""
                }`}
                href=""
              >
                {link.name}
              </a>{" "}
            </div>
          );
        })}
      </div>
      <button>View All</button>
    </header>
  );
};

export default Header;
