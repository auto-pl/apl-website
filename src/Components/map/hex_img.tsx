import * as error_svg from "../app/Resources/Images/error.svg";
import React, { FC } from "react";

// !FIX: this type cast is a hack
const error_icon: any = error_svg;
// TODO: (blocked) get the hexes from the database
// TODO: convert the result to Map<string, SVG>
const svgs: Map<string, typeof error_svg> = new Map();

interface HexImgProps {
  /**
   * The id of the hex to get from the database
   */
  id: string;

  /**
   * The name of the class from `src/styles/hex.sass`
   */
  priority_class_name: string;
}

export const HexImg: FC<HexImgProps> = (props: HexImgProps) => {
  const result = svgs.get(props.id);
  const svg = result || error_icon;
  const alt = result ? `Hex (id: ${props.id})` : "Error loading hex";
  return (
    <div className={props.priority_class_name}>
      <img src={svg} alt={alt} />
    </div>
  );
};
