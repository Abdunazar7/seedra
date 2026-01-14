import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import profile from "../assets/profile.png";
import { Star } from "../components";

const MOCK_DATA = [
  {
    id: 1,
    name: "Carla Samantoes-Diego",
    date: "12.09.2021",
    text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
    rating: 5,
    avatar: profile,
  },
  {
    id: 2,
    name: "Carla Samantoes-Diego",
    date: "12.09.2021",
    text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
    rating: 5,
    avatar: profile,
  },
  {
    id: 3,
    name: "Carla Samantoes-Diego",
    date: "12.09.2021",
    text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
    rating: 5,
    avatar: profile,
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-[36px] font-bold text-[#1D2026] text-center mb-12">
        What out clients say
      </h2>

      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            autoplay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
          className="testimonial-swiper overflow-visible"
        >
          {MOCK_DATA.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={`
                    transition-all duration-300 ease-in-out rounded-[24px] p-8 h-full flex flex-col border w-[318px] h-[344px]
                    ${
                      isActive
                        ? "bg-white border-[#EAF1EB] shadow-xl opacity-100 scale-100"
                        : "bg-transparent border-transparent opacity-40 scale-95 grayscale-[50%]"
                    }
                  `}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border border-gray-100"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-bold text-[#1D2026] text-[16px]">
                        {item.name}
                      </h4>
                      <span className="text-[#70737C] text-[13px]">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-6 pl-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        fill={i < item.rating ? "#FFC107" : "none"}
                        color={i < item.rating ? "#FFC107" : "#D1D1D1"}
                        className="w-5 h-5"
                      />
                    ))}
                  </div>

                  <p className="text-[#4F4F4F] text-[15px] leading-[1.6] text-left">
                    {item.text}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
