export type BaseCoords = [number, number];

interface _BaseInfo {
  id: number;
  continent_id: number;
  name: string;
  map_pos: BaseCoords; // Map coordinate of the base icon & name
  type_id: number;
  type_name: string;
  // Outfit Resources
  resource_amount: number;
  resource_id?: number;
  resource_name?: string;
}
/**
 * Static base information to load and cache.
 */
export type APIBaseInfo = Readonly<_BaseInfo>;

interface _BaseStatus {
  id: number;
  server_id: number;
  population: Population;
  owning_faction?: number;
  owning_outfit?: number;
  held_since: Date; // UTC timestamp of the last cap or reset
}
/**
 * A dynamic base update
 */
export type APIBaseStatus = Readonly<_BaseStatus>;

interface _ContinentInfo {
  id: number;
  name: string;
  description: string;
  lattice_links: Array<BaseCoords>; // Numbers are base IDs
  map_base_svgs: BaseSVGMapping;
  map_tileset: string;
}
/**
 * Static continent data, loaded once and cached.
 */
export type APIContinentInfo = Readonly<_ContinentInfo>;

export type Status = "online" | "locked"; // "down" and "maintenance" aren't supported yet

interface _ContinentStatus {
  id: number;
  server_id: number;
  population: Population;
  status: Status;
  locked_by?: number;
  alert_active: boolean;
  alert_started?: Date;
  alert_ends?: Date;
}
/**
 * Dynamic continent update
 */
export type APIContinentStatus = Readonly<_ContinentStatus>;

interface _Population {
  NC: number;
  TR: number;
  VS: number;
  NSO: number;
}
/**
 * Faction-specific population data.
 */
export type Population = Readonly<_Population>;

interface _BaseSVGMapping {
  [key: string]: string;
}
/**
 * Mapping of string base IDs to their outline SVG.
 */
export type BaseSVGMapping = Readonly<_BaseSVGMapping>;
