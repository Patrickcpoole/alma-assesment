import React from "react";
import { IconProps } from "@/types";

const ArrowRightIcon = ({ className, width, height }: IconProps) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 12h17 M14 5l7 7-7 7"
      />
    </svg>
  );
};

export default ArrowRightIcon;
