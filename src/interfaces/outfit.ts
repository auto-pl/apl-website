import { APIOutfitInfo, Factions } from "./api_interfaces/outfit";
import { ServerInfo, Servers } from "./server";

interface _OutfitInfo extends APIOutfitInfo {
  faction: Factions;
  server_id: Servers;
  server: () => Promise<ServerInfo>;
}

/**
 * Static data representation of an player outfit.
 */
export type OutfitInfo = Readonly<_OutfitInfo>;

export { Factions } from "./api_interfaces/outfit";
