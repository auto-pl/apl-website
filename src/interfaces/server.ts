import {
  APIServerUpdate,
  Servers,
  APIServerInfo,
} from "./api_interfaces/server";
import { ContinentStatus } from "./continent";

export { Servers } from "./api_interfaces/server";
interface _ServerInfo extends APIServerInfo {
  id: Servers;
}
export type ServerInfo = Readonly<_ServerInfo>;

interface _ServerUpdate extends Omit<APIServerUpdate, "open_continents"> {
  id: Servers;
  open_continents: () => Promise<ContinentStatus>;
}

/**
 * Dynamic server data used for status display.
 */
export type ServerUpdate = Readonly<_ServerUpdate>;
