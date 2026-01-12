import React from "react";
import { Clock } from "../components";
import kokat from "../assets/kokat.png";
import strawberry from "../assets/strawberry.png";
import girl from "../assets/girl.png";

function BlogGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[650px]">
        <div className="col-span-2 relative rounded-[24px] bg-[#EAF1EB] p-10 overflow-hidden flex flex-col justify-center">
          <div className="relative z-10 max-w-[400px]">
            <div className="flex items-center gap-2 text-[#70737C] text-sm font-medium mb-3">
              <Clock />
              <span>12.09.2021</span>
            </div>
            <h3 className="font-bold text-[#1D2026] text-[28px] leading-tight mb-4">
              How to plant spinach correctly in winter
            </h3>
            <p className="text-[#70737C] text-[16px] leading-relaxed mb-8">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months...
            </p>
            <button className="bg-white text-[#359740] px-8 py-3 rounded-xl font-bold text-[16px] hover:bg-[#359740] hover:text-white transition-colors cursor-pointer shadow-sm">
              Read
            </button>
          </div>
          <img
            src={kokat}
            alt="Spinach"
            className="absolute right-[-110px] bottom-[-120px] w-[500px] object-contain"
          />
        </div>

        <div className="row-span-2 relative rounded-[24px] bg-[#EFF2F8] p-8 overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-[#70737C] text-sm font-medium mb-3">
              <Clock />
              <span>12.09.2021</span>
            </div>
            <h3 className="font-bold text-[#1D2026] text-[28px] leading-tight mb-4">
              How to plant spinach correctly in winter
            </h3>
            <p className="text-[#70737C] text-[16px] leading-relaxed mb-8">
              In most areas, successive sowing can be done from early spring
              until early winter...
            </p>
            <button className="bg-white text-[#359740] px-8 py-3 rounded-xl font-bold text-[16px] hover:bg-[#359740] hover:text-white transition-colors cursor-pointer shadow-sm">
              Read
            </button>
          </div>
          <img
            src={girl}
            alt="Girl"
            className="absolute bottom-0 right-[-120px] h-[350px] object-cover"
          />
        </div>

        <div className="relative rounded-[24px] bg-[#EFF2F8] p-8 overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-[#70737C] text-sm font-medium mb-3">
              <Clock />
              <span>12.09.2021</span>
            </div>
            <h3 className="font-bold text-[#1D2026] text-[20px] leading-tight max-w-[200px]">
              How to plant spinach correctly in winter
            </h3>
          </div>
          <button className="relative z-10 w-fit bg-white text-[#359740] px-6 py-2.5 rounded-xl font-bold text-[16px] hover:bg-[#359740] hover:text-white transition-colors cursor-pointer shadow-sm">
            Read
          </button>
          <img
            src={strawberry}
            alt="Strawberry"
            className="absolute right-[-50px] bottom-[-30px] w-[200px] rounded-[50%]"
          />
        </div>

        <div className="relative rounded-[24px] bg-[#EFF2F8] p-8 overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-[#70737C] text-sm font-medium mb-3">
              <Clock />
              <span>12.09.2021</span>
            </div>
            <h3 className="font-bold text-[#1D2026] text-[20px] leading-tight max-w-[200px]">
              How to plant spinach correctly in winter
            </h3>
          </div>
          <button className="relative z-10 w-fit bg-white text-[#359740] px-6 py-2.5 rounded-xl font-bold text-[16px] hover:bg-[#359740] hover:text-white transition-colors cursor-pointer shadow-sm">
            Read
          </button>
          <img
            src={strawberry}
            alt="Strawberry"
            className="absolute right-[-50px] bottom-[-30px] w-[200px] rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;
