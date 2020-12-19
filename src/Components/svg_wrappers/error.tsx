import * as React from "react";

export const error = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    height={32}
    width={32}
    xmlns="http://www.w3.org/2000/svg"
    overflow="visible"
    viewBox="0 0 32 32"
    {...props}
  >
    <g fill="currentColor">
      <circle cx={16} cy={16} r={16} />
      <path d="M14.5 25h3v-3h-3v3zm0-19v13h3V6h-3z" />
    </g>
  </svg>
);
