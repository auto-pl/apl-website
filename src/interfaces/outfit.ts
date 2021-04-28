import * as api from "./api_interfaces/outfit";
import { APIOutfitInfo, Faction } from "./api_interfaces/outfit";
import { ServerInfo, Server } from "./server";

interface _OutfitInfo extends APIOutfitInfo {
  faction: Faction;
  server_id: Server;
  server: () => ServerInfo;
}
export type OutfitInfo = Readonly<_OutfitInfo>;

const test: OutfitInfo = {
  id: BigInt(1),
  faction_id: 1,
  name: "Cobalt",
  tag: "MUMS",
  faction: Faction.NC,
  server_id: Server["cobalt"],
};
