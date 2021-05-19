import { ServerInfo } from "../../interfaces/server";
import { with_cache } from "../api_utils/cache";
import { ServerCache } from "./server_cache";

const _get_server_info = async (id: string): Promise<ServerInfo> => {
  // TODO: get server info from API
  // TODO: convert to friendly interface
  return {} as ServerInfo;
};

export const get_server_info = with_cache(_get_server_info, ServerCache);
