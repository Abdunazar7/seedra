import * as React from "react";
const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <rect width={47} height={47} x={0.5} y={0.5} stroke="#EFEFEF" rx={23.5} />
    <path
      fill="#4FA083"
      d="M25 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM17 23.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5H17ZM21 29.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H21Z"
    />
  </svg>
);
export default MenuIcon;
