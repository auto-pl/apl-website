import * as error_svg from "../app/Resources/Images/error.svg";
import React, { FC } from "react";

// TODO: (blocked) get the hexes from the database
// TODO: convert the result to Map<string, SVG>
const svgs: Map<string, any> = new Map([["foo", "bar"]]);

interface HexImgProps {
  /**
   * The id of the hex to get from the database
   */
  id: string;
}

export const HexImg: FC<HexImgProps> = (props: HexImgProps) => {
  const result = svgs.get(props.id);
  const [svg, alt] = result
    ? [result, `Hex (id: ${props.id})`]
    : [error_svg, "Error loading hex"];
  return <img src={svg} alt={alt} />;
};
