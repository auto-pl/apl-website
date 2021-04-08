import { ApiGetter } from "./api";
import { Outfit } from "./player";

export interface Population {
  readonly NC: number;
  readonly TR: number;
  readonly VS: number;
}

/**
 * An object that represents all information about a continent
 */
export interface ContinentDetails {
  readonly name: string;
  readonly population: Population;
  /**
   * The faction that locked the continent.
   */
  readonly locked_by: string | null;
  readonly base_states: () => Promise<Array<BaseState>>;
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
  readonly name: string;
  readonly id: string;
  /**
   * Should be one of the following: [NC, TR, VS, NS]
   * Neutral is NS
   */
  readonly faction: faction;
  readonly continent_id: number;
  /**
   * How long since it was last capped in ms
   */
  readonly time_held: number;
  readonly captured_by: null | Outfit;
  readonly population: Population;
  /**
   * This is the priority level assigned by the AI.
   */
  readonly priority_level: number;
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
