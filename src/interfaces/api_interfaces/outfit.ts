/**
 * Static data representation of an player outfit.
 */
interface _OutfitInfo {
  id: bigint;
  faction_id: number;
  server_id: number;
  name: string;
  tag?: string;
}
export type OutfitInfo = Readonly<_OutfitInfo>;
