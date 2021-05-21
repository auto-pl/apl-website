import { BaseInfo } from "../../interfaces/continent";
import { APIBaseInfo } from "../../interfaces/api_interfaces/continent";
import { with_cache } from "../api_utils/cache";
import { BaseCache } from "./base_cache";
import { convert_base_info } from "./base_info_converters";
import { QueryAPI } from "../Query";
const { query } = QueryAPI;

const is_base_info = (result: unknown): result is APIBaseInfo => {
  if (!(result instanceof Object)) return false;
  const required_keys = [
    "name",
    "continent_id",
    "id",
    "map_pos",
    "type_id",
    "type_name",
    "resource_amount",
  ];
  return required_keys.map((k) => k in result).every((e) => e);
};

const _get_base_info = async (id: string): Promise<BaseInfo> => {
  const params: Array<Record<string, string>> = [{ id }];
  const result = await query(["base", "info"])(params);
  if (!is_base_info(result))
    throw new Error(
      `"Got invalid \`APIBaseInfo\` response from APL API. Notify the API team. Result: ${result}`
    );
  return convert_base_info(result);
};

export const get_base_info = with_cache(_get_base_info, BaseCache);
