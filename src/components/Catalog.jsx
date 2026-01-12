import React from "react";
import {
  Leaf,
  Cards,
  Herb,
  Tomato,
  Fruit,
  Suplies,
  Flower,
} from "../components";

function Catalog() {
  const items = [
    { icon: <Leaf />, label: "ALL" },
    { icon: <Cards />, label: "BUNDLES" },
    { icon: <Herb />, label: "HERBS" },
    { icon: <Tomato />, label: "VEGETABLES" },
    { icon: <Fruit />, label: "FRUITS" },
    { icon: <Suplies />, label: "SUPPLIES" },
    { icon: <Flower />, label: "FLOWERS" },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        {items.map((item, i) => (
          <button
            key={i}
            className="flex-1 h-[72px] flex items-center justify-center gap-3 border border-[#EFEFEF] rounded-[12px] bg-white text-[#1D2026] text-[14px] hover:border-[#359740] transition-colors duration-300 cursor-pointer px-2"
          >

            <div className="shrink-0 scale-110">{item.icon}</div>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
