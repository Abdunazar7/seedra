import React from "react";
import { NavLink } from "react-router-dom";
import {
  CartIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LogoIcon,
  SearchIcon,
} from "../components";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `text-[14px] font-medium tracking-wide whitespace-nowrap hover:text-[#34ad42] ${
      isActive ? "text-[#34ad42]" : "text-[#70737C]"
    }`;

  return (
    <nav className="w-full h-[72px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1210px] mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center gap-8">
          <NavLink to="/">
            <LogoIcon className="h-7 w-auto" />
          </NavLink>

          <ul className="flex items-center gap-4">
            <li>
              <NavLink to="/all-products" className={navLinkClass}>
                ALL PRODUCTS
              </NavLink>
            </li>
            <Divider />
            <li>
              <NavLink to="/about" className={navLinkClass}>
                ABOUT SEEDRA
              </NavLink>
            </li>
            <Divider />
            <li>
              <NavLink to="/blog" className={navLinkClass}>
                OUR BLOG
              </NavLink>
            </li>
            <Divider />
            <li>
              <NavLink to="/contacts" className={navLinkClass}>
                CONTACTS
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="cursor-pointer">
              <InstagramIcon />
            </span>
            <span className="cursor-pointer">
              <FacebookIcon />
            </span>
          </div>

          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="w-[285px] h-12 pl-12 pr-5 border border-[#EFEFEF] rounded-full text-[14px] outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="cursor-pointer">
              <HeartIcon />
            </span>
            <span className="cursor-pointer">
              <CartIcon />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

const Divider = () => <div className="w-px h-6 bg-[#EFEFEF]" />;

export default Navbar;
