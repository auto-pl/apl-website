import { BaseInfo } from "../../interfaces/continent";
import with_cache from "../api_utils/cache";

export const BaseCache: Record<number, BaseInfo> = {};
export const with_base_cache = with_cache(BaseCache);
