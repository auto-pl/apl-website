import * as React from "react";

export const Error = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    height={32}
    width={32}
    xmlns="http://www.w3.org/2000/svg"
    overflow="visible"
    viewBox="0 0 32 32"
    {...props}
  >
    <g fill="#D72828">
      <circle cx={16} cy={16} r={16} />
      <path
        d="M14.5 25h3v-3h-3v3zm0-19v13h3V6h-3z"
        style={{ fill: "#E6E6E6" }}
      />
    </g>
  </svg>
);
