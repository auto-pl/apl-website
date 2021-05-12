import {
  APIContinentInfo,
  APIContinentStatus,
  APIBaseInfo,
  APIBaseStatus,
} from "./api_interfaces/continent";
import { Servers } from "./api_interfaces/server";
import { Factions } from "./outfit";
import { OutfitInfo } from "./outfit";

export type { BaseSVGMapping, Population } from "./api_interfaces/continent";

export type ResourceName = "Auraxium" | "Synthium" | "Polystellarite";
export enum BaseTypes {
  AMP_STATION = 2,
  BIO_LAB = 3,
  TECH_PLANT = 4,
  LARGE_OUTPOST = 5,
  SMALL_OUTPOST = 6,
  WARPGATE = 7,
  CONSTRUCTION_OUTPOST = 9,
  CONTAINMENT_SITE = 11,
}

/**
 * The continent IDs
 */
export enum Continents {
  INDAR = 2,
  HOSSIN = 4,
  AMERISH = 6,
  ESAMIR = 8,
  VR_TRAINING_NC = 96,
  VR_TRAINING_TR = 97,
  VR_TRAINING_VS = 98,
}

interface _ContinentInfo extends APIContinentInfo {
  id: Continents;
  /**
   * The big SVG holding lots of hex outlines.
   * Each hex outline has an ID.
   */
  svgs: string;
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
  name?: ResourceName;
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
  owning_outfit_id: bigint;
}
export type BaseStatus = Readonly<_BaseStatus>;
