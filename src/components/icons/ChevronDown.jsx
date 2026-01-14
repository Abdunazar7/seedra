import * as React from "react";
const ChevronDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#98999C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7 10 5 5 5-5"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ChevronDown;
