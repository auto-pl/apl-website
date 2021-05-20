import { BaseStatus } from "../../interfaces/continent";
import { APIBaseStatus } from "../../interfaces/api_interfaces/continent";
import { convert_base_status } from "./base_status_converters";
import { QueryAPI } from "../Query";
const { query } = QueryAPI;

const is_base_status = (result: unknown): result is APIBaseStatus => {
  if (!(result instanceof Object)) return false;
  const required_keys = ["server_id", "id", "population", "held_since"];
  return required_keys.map((k) => k in result).every((e) => e);
};

export const get_base_status = async (id: string): Promise<BaseStatus> => {
  const params: Record<string, string>[] = [{ id: id.toString() }];
  const result = await query(["base", "status"])(params);
  if (!is_base_status(result))
    throw new Error(
      `"Got invalid \`APIBaseStatus\` response from APL API. Notify the API team. Result: ${result}`
    );
  return convert_base_status(result);
};
