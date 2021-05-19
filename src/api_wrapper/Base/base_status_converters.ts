import { BaseStatus } from "../../interfaces/continent";
import { APIBaseStatus } from "../../interfaces/api_interfaces/continent";
import OutfitAPI from "../Outfit/index";
import { Converter } from "../../interfaces/api";
const { get_outfit } = OutfitAPI;

export const convert_base_status: Converter<APIBaseStatus, BaseStatus> = (
  response
) => {
  const get_outfit_info = () =>
    response.owning_outfit
      ? get_outfit(response.owning_outfit.toString())
      : undefined;

  return {
    id: response.id,
    server_id: response.server_id,
    population: response.population,
    owning_faction: response.owning_faction,
    owning_outfit: get_outfit_info,
    owning_outfit_id: response.owning_outfit,
    held_since: response.held_since,
  };
};
