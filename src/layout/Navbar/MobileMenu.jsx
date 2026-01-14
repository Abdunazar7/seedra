import React from "react";
import { NavLink } from "react-router-dom";
import {
  SearchIcon,
  ChevronUp,
  ChevronDown,
  RightArrow,
  InstagramIcon,
  FacebookIcon,
} from "../../components/icons";

const categories = [
  "Bundles",
  "Herbs",
  "Vegetables",
  "Fruits",
  "Supplies",
  "Flowers",
];

const MobileMenu = ({ isOpen, activeCategory, toggleCategory }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto lg:hidden">
      <div className="px-5 py-6 flex flex-col h-[calc(100vh-72px)]">
        <div className="relative mb-8">
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#70737C]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[56px] pl-12 pr-5 border border-[#EFEFEF] rounded-full text-[16px] outline-none focus:border-[#359740]"
          />
        </div>

        <div className="flex-1">
          <div className="py-4 border-b border-[#EFEFEF]">
            <span className="text-[16px] font-bold text-[#1D2026]">
              All vegetables
            </span>
          </div>

          {categories.map((item) => (
            <div key={item} className="border-b border-[#EFEFEF]">
              <button
                onClick={() => toggleCategory(item)}
                className="w-full py-4 flex justify-between items-center text-[16px] font-bold text-[#1D2026]"
              >
                <span
                  className={activeCategory === item ? "text-[#359740]" : ""}
                >
                  {item}
                </span>
                {activeCategory === item ? <ChevronUp /> : <ChevronDown />}
              </button>

              {activeCategory === item && item === "Vegetables" && (
                <div className="pl-4 pb-4 flex flex-col gap-3">
                  {["Cucumber", "Onion", "Garlic"].map((sub) => (
                    <span
                      key={sub}
                      className="text-[#70737C] text-[16px] font-normal"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 mb-8 space-y-6">
          <MenuLink to="/blog" label="Our blog" />
          <MenuLink to="/about" label="About Seedra" />
        </div>

        <div className="flex gap-4 pb-8">
          <SocialIcon Icon={InstagramIcon} />
          <SocialIcon Icon={FacebookIcon} />
        </div>
      </div>
    </div>
  );
};

const MenuLink = ({ to, label }) => (
  <NavLink to={to} className="flex justify-between items-center group">
    <span className="text-[16px] font-bold text-[#1D2026]">{label}</span>
    <RightArrow />
  </NavLink>
);

const SocialIcon = ({ Icon }) => (
  <span className="w-10 h-10 border border-[#EFEFEF] rounded-lg flex items-center justify-center text-[#70737C]">
    <Icon />
  </span>
);

export default MobileMenu;
