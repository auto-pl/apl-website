/**
 * Static base information to load and cache.
 */
interface _BaseInfo {
  id: number;
  continent_id: number;
  name: string;
  map_pos: [number, number]; // Map coordinate of the base icon & name
  type_id: number;
  type_name: string;
  resource_amount: number;
  resource_id?: number;
  resource_name?: string;
}
export type APIBaseInfo = Readonly<_BaseInfo>;

interface _BaseStatus {
  id: number;
  server_id: number;
  population: Population;
  owning_faction?: number;
  owning_outfit?: number;
  held_since: number; // UTC timestamp of the last cap or reset
}
export type APIBaseStatus = Readonly<_BaseStatus>;

/**
 * Static continent data, loaded once and cached.
 */
interface _ContinentInfo {
  id: number;
  name: string;
  description: string;
  lattice_links: Array<[number, number]>; // Numbers are base IDs
  map_base_svgs: BaseSvgMapping;
  map_tileset: string;
}
export type APIContinentInfo = Readonly<_ContinentInfo>;

/**
 * Dynamic continent update
 */
interface _ContinentStatus {
  id: number;
  server_id: number;
  population: Population;
  status: string;
  locked_by?: number;
  alert_active: boolean;
  alert_started?: number;
  alert_ends?: number;
}
export type APIContinentStatus = Readonly<_ContinentStatus>;

/**
 * Faction-specific population data.
 */
interface _Population {
  NC: number;
  TR: number;
  VS: number;
  NSO: number;
}
export type Population = Readonly<_Population>;

/**
 * Mapping of string base IDs to their outline SVG.
 */
interface _BaseSvgMapping {
  [key: string]: string;
}
export type BaseSvgMapping = Readonly<_BaseSvgMapping>;
