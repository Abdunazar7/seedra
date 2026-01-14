import * as React from "react";
const RightArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#359740"
        fillRule="evenodd"
        d="M1.667 10a8.333 8.333 0 1 1 16.666 0 8.333 8.333 0 0 1-16.666 0Zm6.91 1.91a.833.833 0 0 0 1.179 1.18l2.5-2.5a.833.833 0 0 0 0-1.18l-2.5-2.5a.833.833 0 0 0-1.179 1.18L10.488 10l-1.91 1.91Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default RightArrow;
