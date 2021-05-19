import { BaseInfo } from "../../interfaces/continent";
import { make_cache, AbstractCache } from "../api_utils/cache";

export const BaseCache = make_cache() as AbstractCache<Promise<BaseInfo>>;
