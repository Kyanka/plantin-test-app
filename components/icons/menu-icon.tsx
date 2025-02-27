import { SVGProps } from "react";

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 12C13.4477 12 13 11.5523 13 11C13 10.4477 13.4477 10 14 10H24C24.5523 10 25 10.4477 25 11C25 11.5523 24.5523 12 24 12H14Z"
        fill="#C5D1DB"
      />
      <path
        d="M7 16C7 16.5523 7.44772 17 8 17H24C24.5523 17 25 16.5523 25 16C25 15.4477 24.5523 15 24 15H8C7.44772 15 7 15.4477 7 16Z"
        fill="#C5D1DB"
      />
      <path
        d="M13 21C13 21.5523 13.4477 22 14 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H14C13.4477 20 13 20.4477 13 21Z"
        fill="#C5D1DB"
      />
    </svg>
  );
}
