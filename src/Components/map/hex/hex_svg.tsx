import React, { FC } from "react";

export interface HexSVGProps {
  svg: SVGElement;
}

export const HexSVG: FC<HexSVGProps> = ({ svg }) => {
  return <div>{svg}</div>;
};
