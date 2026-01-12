import * as React from "react";
const Clock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#70737C"
      d="M12 3c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9Zm2.7 9.9H12c-.54 0-.9-.36-.9-.9V7.5c0-.54.36-.9.9-.9s.9.36.9.9v3.6h1.8c.54 0 .9.36.9.9s-.36.9-.9.9Z"
    />
  </svg>
);
export default Clock;
