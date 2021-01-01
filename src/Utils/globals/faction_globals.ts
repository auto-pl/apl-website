import TR_logo from "../../app/Resources/Images/Logos/TR.png";
import VS_logo from "../../app/Resources/Images/Logos/VS.png";
import NC_logo from "../../app/Resources/Images/Logos/NC.png";
import { faction } from "../../interfaces/continent";

export const vs_colour = "rgba(97, 37, 151, 0.75)";
export const tr_colour = "rgba(150, 17, 0, 0.75)";
export const nc_colour = "rgba(29, 70, 152, 0.75)";
export const ns_colour = "rgba(255, 255, 255, 0.75)";
export const vs_colour_no_a = "rgb(97, 37, 151)";
export const tr_colour_no_a = "rgb(150, 17, 0)";
export const nc_colour_no_a = "rgb(29, 70, 152)";
export const ns_colour_no_a = "rgb(255, 255, 255)";

export const faction_names: Array<faction> = ["VS", "TR", "NC"];

/**
 * Decrecated. Use `get_faction_colour` instead
 */
export const faction_colours = new Map([
  ["TR", tr_colour],
  ["NC", nc_colour],
  ["VS", vs_colour],
]);

/**
 * Get the RGB(A) code for a given faction tag. The opacity of RGBAs is set to 75%
 * @param faction_tag The faction tag to get the RGB(A) for
 * @param no_alpha Whether to exclude the alpha field. Defaults to true
 * @throws `Invalid faction tag` if `faction_tag` is not of type `src/interfaces/continents/faction`
 */
export const get_faction_colour = (
  faction_tag: string, // NOTE: I couldn't use `faction` as it was awkward to use in cases involving Arrays
  no_alpha: boolean = true
): string => {
  switch (faction_tag) {
    case "TR":
      return no_alpha ? tr_colour_no_a : tr_colour;
    case "NC":
      return no_alpha ? nc_colour_no_a : nc_colour;
    case "VS":
      return no_alpha ? vs_colour_no_a : vs_colour;
    default:
      throw new Error("Invalid faction tag");
  }
};

/**
 * The image files of the various faction emblems
 */
export const faction_logos: Map<string, any> = new Map([
  ["TR", TR_logo],
  ["VS", VS_logo],
  ["NC", NC_logo],
]);
