import React from "react";
import girl2 from "../assets/girl2.jpg";

function Information() {
  return (
    <section className="max-w-[1110px] mx-auto px-4 py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px]">

        <div className="flex-1 order-1 lg:order-1 text-center lg:text-left">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-[#1D2026] mb-6 lg:mb-8 leading-tight">
            Seedra helps to grow fast and efficient
          </h2>

          <div className="text-[15px] lg:text-[17px] font-normal text-[#1D2026] leading-relaxed space-y-5 lg:space-y-6">
            <p>
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George.
            </p>
            <p>
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings.
              <br className="hidden lg:block" />
              Your easy growing experience is our guarantee.
            </p>
            <p>
              Spinach common culinary uses: salads, soups, smoothies, lasagne,
              pizza, pies, risotto, and more.
            </p>
            <p>
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product.
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center order-2 lg:order-2">
          <div className="relative">
            <div className="absolute inset-[-10px] lg:inset-[-15px] border-[2px] border-transparent border-t-[#359740] border-r-[#359740]/40 rounded-full rotate-[15deg]"></div>

            <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-full border-[6px] lg:border-[10px] border-white shadow-md relative z-10">
              <img
                src={girl2}
                alt="Seedra Growing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
