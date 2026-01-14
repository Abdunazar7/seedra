import React from "react";
import { Flame } from "../components";
import product1 from "../assets/product1.png";

function Hero() {
  return (
    <section className="mt-4 lg:mt-0">
      <div className="bg-[#F3F7F3] rounded-[24px] px-6 py-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between relative min-h-[445px] overflow-hidden">
        <div className="w-full lg:max-w-[550px] flex flex-col">
          <div className="flex items-center gap-3 mb-4 lg:order-2 lg:mb-8">
            <Flame />
            <span className="text-[28px] sm:text-[#1D2026] lg:text-[32px] font-bold text-red-500">
              $12.56
            </span>
            <span className="text-[18px] lg:text-[20px] text-[#70737C] line-through">
              $15.56
            </span>
          </div>

          <h1 className="text-[28px] lg:text-[36px] font-bold text-[#1D2026] leading-[1.2] lg:leading-tight mb-4 lg:order-1">
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h1>

          <div className="lg:hidden flex justify-center my-6">
            <img
              src={product1}
              alt="Seeds"
              className="w-full max-w-[280px] h-auto object-contain"
            />
          </div>

          <p className="text-[#70737C] text-[14px] lg:text-[15px] mb-8 lg:mb-8 leading-relaxed lg:order-3">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>

          <div className="flex flex-row gap-3 lg:gap-4 lg:order-4">
            <button className="flex-1 lg:flex-none bg-[#359740] text-white px-4 lg:px-8 h-[52px] rounded-lg font-bold cursor-pointer hover:bg-[#2d8336] transition-colors text-[14px] lg:text-[16px]">
              Add to card
            </button>
            <button className="flex-1 lg:flex-none bg-white text-[#359740] px-4 lg:px-8 h-[52px] rounded-lg font-bold border border-[#359740] cursor-pointer hover:bg-[#f0f9f1] transition-colors text-[14px] lg:text-[16px]">
              Discover
            </button>
          </div>
        </div>

        <img
          src={product1}
          alt="Seeds"
          className="hidden lg:block absolute right-2 bottom-8 object-contain w-[360px] h-[360px]"
        />
      </div>
    </section>
  );
}

export default Hero;
