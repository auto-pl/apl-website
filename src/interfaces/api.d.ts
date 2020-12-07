import { KeyFunction } from "./global_interfaces";

/**
 * A function that returns a list of something from the API.
 * This should support filtering via the `key` parameter
 * @param key The function for filtering out the undesired results. Optional
 */
export interface ApiGetter<incomingT> {
  (key?: KeyFunction): Array<incomingT>;
}
