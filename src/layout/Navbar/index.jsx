import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CartIcon,
  HeartIcon,
  LogoIcon,
  SearchIcon,
  MenuIcon,
  InstagramIcon,
  FacebookIcon,
} from "../../components/icons";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Vegetables");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  const navLinkClass = ({ isActive }) =>
    `text-[14px] font-medium tracking-wide hover:text-[#359740] transition-colors ${
      isActive ? "text-[#359740]" : "text-[#70737C]"
    }`;

  return (
    <>
      <nav className="w-full h-[72px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.05)] relative z-50">
        <div className="max-w-[1210px] mx-auto px-4 h-full">
          
          <div className="hidden lg:flex justify-between items-center h-full">
            <div className="flex items-center gap-8">
              <NavLink to="/">
                <LogoIcon className="h-7 w-auto" />
              </NavLink>
              <ul className="flex items-center gap-4">
                <NavItem
                  to="/all-products"
                  label="ALL PRODUCTS"
                  className={navLinkClass}
                />
                <Divider />
                <NavItem
                  to="/about"
                  label="ABOUT SEEDRA"
                  className={navLinkClass}
                />
                <Divider />
                <NavItem to="/blog" label="OUR BLOG" className={navLinkClass} />
                <Divider />
                <NavItem
                  to="/contacts"
                  label="CONTACTS"
                  className={navLinkClass}
                />
              </ul>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <InstagramIcon />
                <FacebookIcon />
              </div>
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[285px] h-12 pl-12 pr-5 border border-[#EFEFEF] rounded-full text-[14px] outline-none focus:border-[#359740]"
                />
              </div>
              <div className="flex items-center gap-4">
                <HeartIcon />
                <CartIcon />
              </div>
            </div>
          </div>

          <div className="flex lg:hidden justify-between items-center h-full">
            <NavLink to="/">
              <LogoIcon className="h-6 w-auto" />
            </NavLink>
            <div className="flex items-center gap-5">
              <HeartIcon className="w-6 h-6 text-[#359740]" />
              <CartIcon className="w-6 h-6 text-[#359740]" />
              <button
                onClick={toggleMenu}
                className="cursor-pointer focus:outline-none"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        activeCategory={activeCategory}
        toggleCategory={(cat) =>
          setActiveCategory(activeCategory === cat ? null : cat)
        }
      />
    </>
  );
}

const NavItem = ({ to, label, className }) => (
  <li>
    <NavLink to={to} className={className}>
      {label}
    </NavLink>
  </li>
);

const Divider = () => <div className="w-px h-6 bg-[#EFEFEF]" />;

export default Navbar;
