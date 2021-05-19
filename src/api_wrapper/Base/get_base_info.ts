import { BaseInfo } from "../../interfaces/continent";
import { with_cache } from "../api_utils/cache";
import { BaseCache } from "./base_cache";

const _get_base_info = async (id: string): Promise<BaseInfo> => {
  // TODO: query API for BaseInfo
  // TODO: convert repsonse
  return {} as BaseInfo;
};

export const get_base_info = with_cache(_get_base_info, BaseCache);
