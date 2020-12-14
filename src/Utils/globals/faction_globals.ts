import TR_logo from "../../app/Resources/Images/Logos/TR.png";
import VS_logo from "../../app/Resources/Images/Logos/VS.png";
import NC_logo from "../../app/Resources/Images/Logos/NC.png";

export const vs_colour = "rgba(92, 77, 105, 0.75)";
export const tr_colour = "rgba(135, 81, 67, 0.75)";
export const nc_colour = "rgba(87, 129, 143, 0.75)";
export const ns_colour = "rgba(10, 16, 3, 0.75)";

export const faction_colours = new Map([
  ["TR", tr_colour],
  ["NC", nc_colour],
  ["VS", vs_colour],
]);

/**
 * The image files of the various faction emblems
 */
export const faction_logos: Map<string, any> = new Map([
  ["TR", TR_logo],
  ["VS", VS_logo],
  ["NC", NC_logo],
]);
