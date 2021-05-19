import { BaseCache } from "./base_cache";
import { convert_base_info } from "./base_info_converters";
import { convert_base_status } from "./base_status_converters";
import { get_base_status } from "./get_base_status";
import { get_base_info } from "./get_base_info";

const BaseAPI = {
  BaseCache,
  convert_base_info,
  convert_base_status,
  get_base_status,
  get_base_info,
};
export default BaseAPI;
