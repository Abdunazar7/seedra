import React from "react";
import { NavLink } from "react-router-dom";

import Catalog from "../../components/Catalog";
import ProductCards from "../../components/ProductCards";
import Information from "../../components/Info";
import Testimonials from "../../components/Testimonials";
import Hero from "../../components/Hero";
import BlogSection from "./components/BlogSection";

function Home() {
  return (
    <div className="container flex flex-col gap-6">
      <Hero />

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

      <BlogSection />
      <Testimonials />
      <Information />
    </div>
  );
}

export default Home;
