import TR_logo from "../../app/Resources/Images/Logos/TR.png";
import VS_logo from "../../app/Resources/Images/Logos/VS.png";
import NC_logo from "../../app/Resources/Images/Logos/NC.png";
import { faction } from "../../interfaces/continent";

export const vs_colour = "rgba(92, 77, 105, 0.75)";
export const tr_colour = "rgba(135, 81, 67, 0.75)";
export const nc_colour = "rgba(87, 129, 143, 0.75)";
export const ns_colour = "rgba(10, 16, 3, 0.75)";
export const vs_colour_no_a = "rgb(92, 77, 105)";
export const tr_colour_no_a = "rgb(135, 81, 67)";
export const nc_colour_no_a = "rgb(87, 129, 143)";
export const ns_colour_no_a = "rgb(10, 16, 3)";

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
 * Get the RGB(A) code for a given faction tag
 * @param faction_tag The faction tag to get the RGB(A) for
 * @param no_alpha Whether to exclude the alpha field
 * @throws `Invalid faction tag` if `faction_tag` is not of type `src/interfaces/continents/faction`
 */
export const get_faction_colour = (
  faction_tag: string, // NOTE: I couldn't use `faction` as it was awkward to use in cases involving Arrays
  no_alpha: boolean = false
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
