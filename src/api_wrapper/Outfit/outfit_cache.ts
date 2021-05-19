import { OutfitInfo } from "../../interfaces/outfit";
import { make_cache, AbstractCache } from "../api_utils/cache";

/**
 * Caches outfit IDs and the promises for their info objects
 */
export const OutfitCache = make_cache() as AbstractCache<Promise<OutfitInfo>>;
