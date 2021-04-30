import {
  APIContinentInfo,
  Continents,
  APIContinentStatus,
  APIBaseInfo,
  APIBaseStatus,
  BaseTypes,
  ResourceName,
} from "./api_interfaces/continent";
import { Servers } from "./api_interfaces/server";
import { Factions } from "./api_interfaces/outfit";
import { OutfitInfo } from "./outfit";

export type {
  BaseSVGMapping,
  Population,
  Continents,
  BaseTypes,
  ResourceName,
} from "./api_interfaces/continent";

interface _ContinentInfo extends APIContinentInfo {
  id: Continents;
}
/**
 * Static data about a continent to be loaded once and cached.
 */
export type ContinentInfo = Readonly<_ContinentInfo>;

export interface Alert {
  active: boolean;
  started?: Date;
  ends?: Date;
}

interface _ContinentStatus
  extends Omit<
    APIContinentStatus,
    "alert_active" | "alert_started" | "alert_ends"
  > {
  id: Continents;
  server_id: Servers;
  locked_by?: Factions;
  alert_info: Alert;
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
  id?: number;
  name: ResourceName;
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
  type: BaseTypes;
  resource_info: BaseResources;
}
export type BaseInfo = Readonly<_BaseInfo>;

interface _BaseStatus extends Omit<APIBaseStatus, "owning_outfit"> {
  server_id: Servers;
  owning_faction?: Factions;
  owning_outfit: () => Promise<OutfitInfo>;
}
export type BaseStatus = Readonly<_BaseStatus>;
