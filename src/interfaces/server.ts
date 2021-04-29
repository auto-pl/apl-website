import { APIServerUpdate, Servers } from "./api_interfaces/server";
import { ContinentStatus } from "./api_interfaces/continent";

export type { ServerInfo, Servers } from "./api_interfaces/server";

interface _ServerUpdate extends Omit<APIServerUpdate, "open_continents"> {
  id: Servers;
  open_continents: Promise<ContinentStatus>;
}

/**
 * Dynamic server data used for status display.
 */
export type ServerUpdate = Readonly<_ServerUpdate>;
