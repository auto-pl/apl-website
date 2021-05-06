import {
  BaseInfo,
  BaseStatus,
  BaseResources,
  ResourceName,
  BaseTypes,
  Continents,
} from "../../interfaces/continent";
import {
  APIBaseInfo,
  APIBaseStatus,
} from "../../interfaces/api_interfaces/continent";
import { Converter } from "../../interfaces/api";

const is_valid_resource_name = (name: string): name is ResourceName => {
  return ["Auraxium", "Synthium", "Polystellarite"].includes(name);
};

const convert_resources: Converter<APIBaseInfo, BaseResources> = (
  response
) => ({
  amount: response.resource_amount,
  name:
    response.resource_name && is_valid_resource_name(response.resource_name)
      ? response.resource_name
      : undefined,
  id: response.resource_id,
});

const convert_base_type: Converter<APIBaseInfo, BaseTypes> = (response) =>
  BaseTypes[response.type_name as keyof typeof BaseTypes];

export const convert_base_info: Converter<APIBaseInfo, BaseInfo> = (
  response
) => {
  const resources = convert_resources(response);
  const base_type = convert_base_type(response);
  return {
    continent_id: response.continent_id,
    type: base_type,
    resource_info: resources,
    id: response.id,
    name: response.name,
    map_pos: response.map_pos,
  };
};
