import { make_cache, AbstractCache } from "../api_utils/cache";
import { ServerInfo } from "../../interfaces/server";

export const ServerCache = make_cache() as AbstractCache<ServerInfo>;
