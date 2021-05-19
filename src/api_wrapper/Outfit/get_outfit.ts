import { OutfitInfo } from "../../interfaces/outfit";
import { OutfitCache } from "./outfit_cache";
import { with_cache } from "../api_utils/cache";

const _get_outfit = async (id: string): Promise<OutfitInfo> => {
  // TODO: query outfit endpoint
  // TODO: call converter
  return {} as OutfitInfo;
};

const get_outfit = with_cache(_get_outfit, OutfitCache);
export default get_outfit;
