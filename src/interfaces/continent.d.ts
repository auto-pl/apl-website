import { ApiGetter } from "./api";
import { Outfit, Player } from "./player";

/**
 * An object that represents all information about a continent
 */
export interface ContinentDetails {
  name: string;
  population: number;
  locked: boolean;
  base_states: Array<BaseState>;
}

/**
 * Represents a base.
 */
export interface BaseState {
  name: string;
  /**
   * Should be one of the following: [NC, TR, VS, NS]
   * Neutral is NS
   */
  faction: string;
  continent_id: number;
  /**
   * How long since it was last capped in ms
   */
  time_held: number;
  captured_by: null | Outfit;
  leaderboard: null | Array<{ player: Player; score: number; kills: number }>;
}

export type ContinentGetter = ApiGetter<ContinentDetails>;

/**
 * A more readable representation of the continent IDs
 */
export enum ContinentIds {
  Esamir,
  Indar,
  Amerish,
  Hossin,
}
