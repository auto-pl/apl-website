import { ApiGetter } from "./api";
import { Outfit } from "./player";

export interface Population {
  NC: number;
  TR: number;
  VS: number;
}

/**
 * An object that represents all information about a continent
 */
export interface ContinentDetails {
  name: string;
  population: Population;
  /**
   * The faction that locked the continent.
   */
  locked_by: string | null;
  base_states: Array<BaseState>;
}

export interface ContinentView {
  view_url: string;
  details: ContinentDetails;
}

export type ContinentViews = Array<ContinentView>;
export type Continents = Array<ContinentDetails>;

/**
 * Convert a list of `ContinentDetails` to `ContinentView`
 * @param conts The ContinentDetails to add view URLs to
 * @param view_urls The URLs to add to `conts`
 * @throws The number of URLs does not match the number of continents
 */
export const to_continent_view = (
  conts: Array<ContinentDetails>,
  view_urls: Array<string>
): ContinentViews => {
  if (conts.length !== view_urls.length)
    throw new Error(
      "The number of URLs does not match the number of continents"
    );
  return conts.map((cont, i) => ({ details: cont, view_url: view_urls[i] }));
};

export type faction = "NC" | "TR" | "VS" | "NS";

/**
 * Represents a base.
 */
export interface BaseState {
  name: string;
  id: string;
  /**
   * Should be one of the following: [NC, TR, VS, NS]
   * Neutral is NS
   */
  faction: faction;
  continent_id: number;
  /**
   * How long since it was last capped in ms
   */
  time_held: number;
  captured_by: null | Outfit;
  population: Population;
  /**
   * This is the priority level assigned by the AI.
   */
  priority_level: number;
}

export type ContinentGetter = ApiGetter<ContinentDetails>;

/**
 * A more readable representation of the continent IDs
 */
export enum ContinentIds {
  INDAR = 2,
  HOSSIN = 4,
  AMERISH = 6,
  ESAMIR = 8,
}
