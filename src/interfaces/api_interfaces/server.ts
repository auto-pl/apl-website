import { Population } from "./continent";

/**
 * Static data for a PS2 game server.
 */
interface _ServerInfo {
  id: number; // Integer
  name: string;
  region: string;
}
export type ServerInfo = Readonly<_ServerInfo>;
/**
 * Dynamic server data used for status display.
 */
interface _ServerUpdate {
  id: number;
  status: string;
  population: Population;
  open_continents: Array<number>;
}
export type ServerUpdate = Readonly<_ServerUpdate>;
