import { BaseStatus } from "../../interfaces/continent";
import { APIBaseStatus } from "../../interfaces/api_interfaces/continent";
import OutfitAPI from "../Outfit/index";
import { Converter } from "../../interfaces/api";
const { get_outfit } = OutfitAPI;

export const convert_base_info: Converter<APIBasesStatus, BaseStatus> = (
  response
) => {
  const get_outfit_info = () => get_outfit(response.outfit_id);
  return {};
};
