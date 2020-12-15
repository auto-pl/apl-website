const svgs: Map<string, SVGElement> = require("../app/Resources/Hexes/");
const error_svg: SVGElement = require("../app/Resources/Images/error.svg");

export const get_hex = (id: string): SVGElement => {
  const svg = svgs.get(id);
  if (!svg) return error_svg;
  return svg;
};
