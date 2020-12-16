import { ApiGetter } from "./api";
import { Outfit, Player } from "./player";

/**
 * An object that represents all information about a continent
 */
export interface ContinentDetails {
  name: string;
  population: number;
  /**
   * The faction that locked the continent.
   */
  locked_by: string | null;
  base_states: Array<BaseState>;
}

export type faction = "NC" | "TR" | "VS" | "NS";

/**
 * Represents a base.
 */
export interface BaseState {
  name: string;
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
  leaderboard: null | Array<{ player: Player; score: number; kills: number }>;
  population: { NC: number; TR: number; VS: number };
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
