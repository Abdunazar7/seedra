import * as React from "react";
const ChevronUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#4FA083"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m17 14-5-5-5 5"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M24 24H0V0h24z" />
      </clipPath>
    </defs>
  </svg>
);
export default ChevronUp;
