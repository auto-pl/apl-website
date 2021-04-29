import {
  APIContinentInfo,
  Continents,
  APIContinentStatus,
  APIBaseInfo,
  APIBaseStatus,
  BaseType,
  ResourceName,
} from "./api_interfaces/continent";
import { Servers } from "./api_interfaces/server";
import { Factions } from "./api_interfaces/outfit";
import { OutfitInfo } from "./outfit";

export type {
  BaseSVGMapping,
  Population,
  Continents,
  BaseType,
  ResourceName,
} from "./api_interfaces/continent";

interface _ContinentInfo extends APIContinentInfo {
  id: Continents;
}
/**
 * Static data about a continent to be loaded once and cached.
 */
export type ContinentInfo = Readonly<_ContinentInfo>;

interface _ContinentStatus extends APIContinentStatus {
  id: Continents;
  server_id: Servers;
  locked_by?: Factions;
}
/**
 * A dynamic continent update
 */
export type ContinentStatus = Readonly<_ContinentStatus>;
/**
 * An object containing the outfit resource gain for owning this base.
 */
export interface BaseResources {
  amount: number;
  resource_id?: number;
  resource_name: ResourceName;
}

interface _BaseInfo
  extends Omit<
    APIBaseInfo,
    | "resource_amount"
    | "resource_id"
    | "resource_name"
    | "type_id"
    | "type_name"
  > {
  continent_id: Continents;
  type: BaseType;
  resource_info: BaseResources;
}
export type BaseINfo = Readonly<_BaseInfo>;

interface _BaseStatus extends Omit<APIBaseStatus, "owning_outfit"> {
  server_id: Servers;
  owning_faction?: Factions;
  owning_outfit: Promise<OutfitInfo>;
}
export type BaseStatus = Readonly<_BaseStatus>;
