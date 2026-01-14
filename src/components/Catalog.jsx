import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Leaf,
  Cards,
  Herb,
  Tomato,
  Fruit,
  Suplies,
  Flower,
} from "../components";

function Catalog() {
  const items = [
    { icon: <Leaf />, label: "ALL" },
    { icon: <Cards />, label: "BUNDLES" },
    { icon: <Herb />, label: "HERBS" },
    { icon: <Tomato />, label: "VEGETABLES" },
    { icon: <Fruit />, label: "FRUITS" },
    { icon: <Suplies />, label: "SUPPLIES" },
    { icon: <Flower />, label: "FLOWERS" },
  ];

  return (
    <div className="mb-8 select-none">
      <Swiper
        spaceBetween={12}
        slidesPerView={2.3}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        className="w-full"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="h-auto">
            <button
              className="
                w-full h-[64px] lg:h-[76px] 
                flex items-center justify-center gap-3 
                border border-[#EFEFEF] rounded-[12px] 
                bg-white text-[#1D2026] text-[14px] font-medium
                hover:border-[#359740] hover:text-[#359740] 
                transition-all duration-300 cursor-pointer
              "
            >
              <div className="shrink-0 scale-90 lg:scale-100 text-[#359740]">
                {item.icon}
              </div>
              <span className="uppercase tracking-wide text-[13px] lg:text-[14px]">
                {item.label}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Catalog;
