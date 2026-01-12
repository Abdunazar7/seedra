import React from "react";
import { NavLink } from "react-router-dom";
import { Flame } from "../components";

import product1 from "../assets/product1.png";

import Catalog from "../components/Catalog";
import ProductCards from "../components/ProductCards";
import Blog from "../components/Blog";
import Information from "../components/Info";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="container flex flex-col gap-6">
      <section>
        <div className="bg-[#F3F7F3] rounded-[24px] p-12 flex items-center justify-between relative min-h-[445px] overflow-hidden">
          <div className="max-w-[550px]">
            <h1 className="text-[36px] font-bold text-[#1D2026] leading-tight mb-4">
              SEEDRA Basil Seeds for Indoor and Outdoor Planting
            </h1>
            <p className="text-[#70737C] text-[15px] mb-8 leading-relaxed">
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Your easy growing experience is our guarantee
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Flame />
              <span className="text-[32px] font-bold text-[#1D2026]">
                $12.56
              </span>
              <span className="text-[20px] text-[#70737C] line-through">
                $15.56
              </span>
            </div>

            <div className="flex gap-4">
              <button className="bg-[#359740] text-white px-8 h-[52px] rounded-lg font-bold cursor-pointer">
                Add to card
              </button>
              <button className="bg-white text-[#359740] px-8 h-[52px] rounded-lg font-bold border border-[#359740] cursor-pointer">
                Discover
              </button>
            </div>
          </div>

          <img
            src={product1}
            alt="Seeds"
            className="absolute right-2 bottom-8 object-contain w-[360px] h-[360px]"
          />
        </div>
      </section>

      <section>
        <div className="bg-[#FFE62E17] py-6 px-10 rounded-[20px] flex flex-col items-center text-center">
          <h3 className="text-[20px] font-bold text-[#1D2026]">
            We sell seeds
          </h3>
          <p className="text-[16px] text-[#1D2026] mt-1 opacity-90">
            that always sprout and gardening supplies which never break
          </p>
        </div>
      </section>

      <section className="flex justify-between items-center mt-5">
        <h2 className="text-[36px] font-bold">Our products.</h2>
        <NavLink
          to="/all-products"
          className="text-[#359740] font-bold border border-[#359740] px-6 py-3 rounded-xl hover:bg-[#359740] hover:text-white transition-colors"
        >
          View all (12)
        </NavLink>
      </section>

      <Catalog />
      <ProductCards />

      <section className="flex justify-between items-center mt-5">
        <h2 className="text-[36px] font-bold">Our blog.</h2>
        <NavLink
          to="/blog"
          className="text-[#359740] font-bold border border-[#359740] px-6 py-3 rounded-xl hover:bg-[#359740] hover:text-white transition-colors"
        >
          Go to blog
        </NavLink>
      </section>

      <Blog />
      <Testimonials />
      <Information />
    </div>
  );
}

export default Home;
