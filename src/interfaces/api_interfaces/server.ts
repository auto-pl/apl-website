import { Population } from "./continent";

export type Region = "EU" | "US East" | "US West" | "Asia";

interface _ServerInfo {
  id: number; // Integer
  name: string;
  region: Region;
}
/**
 * Static data for a PS2 game server.
 */
export type ServerInfo = Readonly<_ServerInfo>;
interface _ServerUpdate {
  id: number;
  status: string;
  population: Population;
  open_continents: Array<number>;
}
/**
 * Dynamic server data used for status display.
 */
export type APIServerUpdate = Readonly<_ServerUpdate>;

/**
 * The server IDs
 */
export enum Servers {
  /**
   * The US West server
   */
  CONNERY = 1,
  /**
   * An EU server
   */
  MILLER = 10,
  /**
   * An EU server
   */
  COBALT = 13,
  /**
   * The US East server
   */
  EMERALD = 17,
  /**
   * The semi-public events server.
   * US East.
   */
  JAEGER = 19,
  /**
   * The Asia and Oceania server
   */
  SOLTECH = 40,
  /**
   * The private testing server.
   * @deprecated This is private.
   */
  APEX = 24,
  /**
   * This server is no longer active.
   * It was the Australian server.
   * @deprecated This server is closed.
   */
  BRIGGS = 25,
}
