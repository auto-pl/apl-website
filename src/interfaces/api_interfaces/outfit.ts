interface _OutfitInfo {
  id: bigint;
  faction_id: number;
  server_id: number;
  name: string;
  tag?: string;
}
/**
 * Static data representation of an player outfit.
 */
export type APIOutfitInfo = Readonly<_OutfitInfo>;

/**
 * Enum for the faction IDs
 */
export enum Factions {
  VS,
  NC,
  TR,
}
