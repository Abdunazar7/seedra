import React from "react";
import girl2 from "../assets/girl2.jpg";

function Information() {
  return (
    <div className="flex items-center gap-[80px] py-10">
      <div className="flex-1">
        <h2 className="text-[36px] font-bold text-[#1D2026] mb-8 leading-tight">
          Seedra helps to grow fast and efficient
        </h2>

        <div className="text-[17px] font-light text-[#1D2026] leading-relaxed space-y-6">
          <p>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George.
          </p>
          <p>
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings.
            <br />
            Your easy growing experience is our guarantee.
          </p>
          <p>
            Spinach common culinary uses: salads, soups, smoothies, lasagne,
            pizza, pies, risotto, and more.
          </p>
          <p>
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product.
          </p>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="relative">
          <div className="absolute inset-[-15px] border-[2px] border-transparent border-t-[#359740] border-r-[#359740]/30 rounded-full rotate-[15deg]"></div>

          <div className="w-[450px] h-[450px] overflow-hidden rounded-full border-[10px] border-white shadow-sm relative z-10">
            <img
              src={girl2}
              alt="Seedra Growing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
