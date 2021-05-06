import { KeyFunction } from "./global_interfaces";

/**
 * A function that returns a list of something from the API.
 * This should support filtering via the `key` parameter
 * @param key The function for filtering out the undesired results. Optional
 */
export interface ApiGetter<contained> {
  (key?: KeyFunction): Array<contained>;
}

/**
 * A function that converts an API response to an output type.
 */
export interface Converter<Response, Output> {
  (response: Response): Output;
}
