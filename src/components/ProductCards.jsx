import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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

const Card = ({ p }) => (
  <div className="border border-[#EFEFEF] rounded-3xl p-4 lg:p-6 flex flex-col h-full bg-white hover:shadow-md transition-all">

    <div className="bg-[#FBFBFB] rounded-2xl aspect-square mb-5 flex items-center justify-center relative">
      <button className="absolute top-4 right-4 text-[#70737C] hover:text-red-500">
        <HeartIcon className="w-6 h-6" />
      </button>
      <img
        src={p.img}
        alt={p.title}
        className="w-[80%] h-[80%] object-contain"
      />
    </div>

    <div className="flex gap-1 mb-2 items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${
            i < p.rating ? "text-[#FFC107]" : "text-[#EFEFEF]"
          } w-4 h-4`}
        />
      ))}
      <span className="text-[#70737C] text-sm ml-1">({p.reviews})</span>
    </div>

    <h3 className="text-[16px] lg:text-[18px] font-medium text-[#1D2026] mb-4 line-clamp-2">
      {p.title}
    </h3>

    <div className="flex justify-between items-center mt-auto">
      <div className="flex items-center gap-2">
        <span className="text-[20px] lg:text-[24px] font-bold">${p.price}</span>
        {p.oldPrice && (
          <span className="line-through text-[#70737C]">${p.oldPrice}</span>
        )}
      </div>
      <button className="p-2 lg:p-3 border border-[#359740] rounded-xl text-[#359740] hover:bg-[#359740] hover:text-white transition">
        <CartIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
    </div>
  </div>
);

function ProductCards() {
  return (
    <div className="px-4 lg:px-0 mb-10 overflow-hidden">
      <div className="lg:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.1}
          className="!overflow-visible"
        >
          {MOCK_DATA.products.map((p) => (
            <SwiperSlide key={p.id}>
              <Card p={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:grid grid-cols-3 gap-8">
        {MOCK_DATA.products.map((p) => (
          <Card key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
