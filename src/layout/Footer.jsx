import React from "react";
import { NavLink } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LogoIcon } from "../components";

function Footer() {
  const linkClass =
    "text-[#70737C] text-[14px] hover:text-[#359740] transition-colors";
  const mainLinkClass =
    "text-[#70737C] lg:text-[#359740] font-bold text-[14px] uppercase hover:text-[#359740] transition-colors";

  return (
    <footer className="w-full bg-white pt-10 pb-6 shadow-[0px_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="container px-4 mx-auto">

        <div className="flex flex-col lg:hidden mb-10">

          <div className="flex justify-center mb-8">
            <NavLink to="/">
              <LogoIcon className="h-7 w-auto" />
            </NavLink>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6">

            <div className="flex flex-col gap-4">
              <NavLink to="/all-products" className={mainLinkClass}>
                ALL PRODUCTS
              </NavLink>
              <NavLink to="/about" className={mainLinkClass}>
                ABOUT SEEDRA
              </NavLink>
              <NavLink to="/blog" className={mainLinkClass}>
                OUR BLOG
              </NavLink>
            </div>

            <div className="flex flex-col gap-4">
              <NavLink to="/terms" className={linkClass}>
                Terms&Conditions
              </NavLink>
              <NavLink to="/privacy" className={linkClass}>
                Privacy Policy
              </NavLink>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between mb-8">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to="/all-products"
                className="text-[#359740] font-bold text-[14px]"
              >
                ALL PRODUCTS
              </NavLink>
            </li>
            <Divider />
            <li>
              <NavLink
                to="/about"
                className="text-[#359740] font-bold text-[14px]"
              >
                ABOUT SEEDRA
              </NavLink>
            </li>
            <Divider />
            <li>
              <NavLink
                to="/blog"
                className="text-[#359740] font-bold text-[14px]"
              >
                OUR BLOG
              </NavLink>
            </li>
          </ul>

          <NavLink to="/">
            <LogoIcon className="h-7 w-auto" />
          </NavLink>

          <ul className="flex items-center gap-5">
            <li>
              <NavLink to="/" className="text-[#70737C] text-[14px]">
                Terms&Conditions
              </NavLink>
            </li>
            <Divider />
            <li>
              <NavLink to="/" className="text-[#70737C] text-[14px]">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-full h-[1px] bg-[#EFEFEF] mb-6" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#359740]">
            <InstagramIcon className="cursor-pointer hover:opacity-80 transition" />
            <FacebookIcon className="cursor-pointer hover:opacity-80 transition" />
          </div>

          <div className="text-[#70737C] text-[14px]">All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}

const Divider = () => <div className="w-[1px] h-4 bg-[#EFEFEF]" />;

export default Footer;
