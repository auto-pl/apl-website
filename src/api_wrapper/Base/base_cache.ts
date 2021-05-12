import { BaseInfo } from "../../interfaces/continent";
import make_cache from "../api_utils/make_cache";
import { Cache } from "../api_utils/abstract_cache";

const BaseCache = make_cache() as Cache<BaseInfo>;
export default BaseCache;
