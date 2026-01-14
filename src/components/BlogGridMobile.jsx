import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Clock } from "../components";

import kokat from "../assets/kokat.png";
import strawberry from "../assets/strawberry.png";
import girl from "../assets/girl.png";

function BlogGridMobile() {
  return (
    <div className="block lg:hidden w-full mb-10">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.1}
        className="px-4 !overflow-hidden"
      >
        
        <SwiperSlide>
          <div className="bg-[#EAF1EB] rounded-[24px] p-6 h-[340px] relative overflow-hidden flex flex-col">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#70737C] text-xs mb-2">
                <Clock />
                <span>12.09.2021</span>
              </div>

              <h3 className="font-bold text-[#1D2026] text-[18px] leading-tight mb-3 max-w-[80%]">
                How to plant spinach correctly in winter
              </h3>

              <p className="text-[#70737C] text-sm">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
            </div>

            <div className="flex-1" />

            <button className="bg-white text-[#359740] px-8 py-3 rounded-xl font-bold hover:bg-[#359740] hover:text-white transition w-fit z-10">
              Read
            </button>

            <img
              src={kokat}
              alt=""
              className="absolute right-[-50px] bottom-[-40px] w-[260px] h-[260px] object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#EFF2F8] rounded-[24px] p-6 h-[340px] relative overflow-hidden flex flex-col">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#70737C] text-xs mb-2">
                <Clock />
                <span>12.09.2021</span>
              </div>

              <h3 className="font-bold text-[#1D2026] text-[18px] leading-tight mb-3 max-w-[80%]">
                How to plant spinach correctly in winter
              </h3>

              <p className="text-[#70737C] text-sm">
                In most areas, successive sowing can be done from early spring
                until early winter...
              </p>
            </div>

            <div className="flex-1" />

            <button className="bg-white text-[#359740] px-8 py-3 rounded-xl font-bold hover:bg-[#359740] hover:text-white transition w-fit z-10">
              Read
            </button>

            <img
              src={girl}
              alt=""
              className="absolute right-[-60px] bottom-[-30px] w-[220px] h-[220px] object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#EFF2F8] rounded-[24px] p-6 h-[340px] relative overflow-hidden flex flex-col">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#70737C] text-xs mb-2">
                <Clock />
                <span>12.09.2021</span>
              </div>

              <h3 className="font-bold text-[#1D2026] text-[18px] leading-tight max-w-[70%]">
                How to plant spinach correctly in winter
              </h3>
            </div>

            <div className="flex-1" />

            <button className="bg-white text-[#359740] px-6 py-2.5 rounded-xl font-bold hover:bg-[#359740] hover:text-white transition w-fit z-10">
              Read
            </button>

            <img
              src={strawberry}
              alt=""
              className="absolute right-[-40px] bottom-[-60px] w-[200px] h-[200px] rounded-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#EFF2F8] rounded-[24px] p-6 h-[340px] relative overflow-hidden flex flex-col">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#70737C] text-xs mb-2">
                <Clock />
                <span>12.09.2021</span>
              </div>

              <h3 className="font-bold text-[#1D2026] text-[18px] leading-tight max-w-[70%]">
                How to plant spinach correctly in winter
              </h3>
            </div>

            <div className="flex-1" />

            <button className="bg-white text-[#359740] px-6 py-2.5 rounded-xl font-bold hover:bg-[#359740] hover:text-white transition w-fit z-10">
              Read
            </button>

            <img
              src={strawberry}
              alt=""
              className="absolute right-[-40px] bottom-[-60px] w-[200px] h-[200px] rounded-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BlogGridMobile;
