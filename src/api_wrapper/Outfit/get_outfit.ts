import { OutfitInfo } from "../../interfaces/outfit";
import { with_cache } from "../api_utils/cache";

const _get_outfit = async (id: string): Promise<OutfitInfo> => {
  // TODO: query outfit endpoint
  // TODO: call converter
  return {} as OutfitInfo;
};

const get_outfit = with_cache()(_get_outfit);
export default get_outfit;
