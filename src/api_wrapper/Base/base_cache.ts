import { BaseInfo } from "../../interfaces/continent";
import { make_cache, AbstractCache } from "../api_utils/cache";

const BaseCache = make_cache() as AbstractCache<BaseInfo>;
export default BaseCache;
