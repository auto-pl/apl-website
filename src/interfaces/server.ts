import {
  APIServerUpdate,
  Servers,
  APIServerInfo,
} from "./api_interfaces/server";
import { ContinentStatus } from "./continent";

export { Servers } from "./api_interfaces/server";

export type Region = "EU" | "US East" | "US West" | "Asia";
export type Status = "online" | "offline";

interface _ServerInfo extends APIServerInfo {
  id: Servers;
  region: Region;
  status: Status;
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
