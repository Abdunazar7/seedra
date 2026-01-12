import React from "react";
import { CartIcon, HeartIcon, Star } from "../components";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

const MOCK_DATA = {
  products: [
    {
      id: 1,
      title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
      price: 12.56,
      oldPrice: 15.56,
      rating: 5,
      reviews: 123,
      img: product1,
    },
    {
      id: 2,
      title:
        "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
      price: 12.56,
      rating: 5,
      reviews: 123,
      img: product2,
    },
    {
      id: 3,
      title: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
      price: 12.56,
      rating: 5,
      reviews: 123,
      img: product3,
    },
    {
      id: 4,
      title:
        "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
      price: 12.56,
      rating: 5,
      reviews: 123,
      img: product1,
    },
    {
      id: 5,
      title: "SEEDRA Corn-Bodacious Hybrid Seeds for Indoor and Outdoor",
      price: 12.56,
      oldPrice: 15.56,
      rating: 5,
      reviews: 123,
      img: product2,
    },
    {
      id: 6,
      title: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
      price: 12.56,
      rating: 5,
      reviews: 123,
      img: product3,
    },
  ],
};

function ProductCards() {
  return (
    <div className="grid grid-cols-3 gap-8 mb-10">
      {MOCK_DATA.products.map((p) => (
        <div
          key={p.id}
          className="border border-[#EFEFEF] rounded-3xl p-6 flex flex-col transition-all hover:shadow-md"
        >
          <div className="bg-[#FBFBFB] rounded-2xl aspect-square mb-5 flex items-center justify-center relative overflow-hidden">
            <button className="absolute top-4 right-4 text-[#70737C] cursor-pointer hover:text-red-500 transition-colors">
              <HeartIcon />
            </button>
            <img src={p.img} alt={p.title} className="w-[70%] object-contain" />
          </div>

          <div className="flex gap-1 mb-2 items-center">
            {[...Array(p.rating)].map((_, i) => (
              <Star key={i} className="text-[#FFC107] w-4" />
            ))}
            <span className="text-[#70737C] text-[14px] ml-1">
              ({p.reviews})
            </span>
          </div>

          <h3 className="text-[18px] font-medium text-[#1D2026] mb-4 leading-snug line-clamp-2">
            {p.title}
          </h3>

          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center gap-2">
              <span className="text-[24px] font-bold text-[#1D2026]">
                ${p.price}
              </span>
              {p.oldPrice && (
                <span className="text-[#70737C] text-[16px] line-through">
                  ${p.oldPrice}
                </span>
              )}
            </div>
            <button className="p-3 border border-[#359740] rounded-xl cursor-pointer text-[#359740] hover:text-white transition-all">
              <CartIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
