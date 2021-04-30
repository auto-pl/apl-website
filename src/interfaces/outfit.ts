import { APIOutfitInfo } from "./api_interfaces/outfit";
import { ServerInfo, Servers } from "./server";

/**
 * Enum for the faction IDs
 */
export enum Factions {
  VS,
  NC,
  TR,
}
interface _OutfitInfo extends Omit<APIOutfitInfo, "faction_id"> {
  faction: Factions;
  server_id: Servers;
  server: () => Promise<ServerInfo>;
}

/**
 * Static data representation of an player outfit.
 */
export type OutfitInfo = Readonly<_OutfitInfo>;
