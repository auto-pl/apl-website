import React, { FC } from "react";
const error_svg = require("../../app/Resources/Images/error.svg") as string;

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
  const HexSVG = result || error_svg;
  return (
    <div className={props.priority_class_name}>
      <HexSVG />
    </div>
  );
};
