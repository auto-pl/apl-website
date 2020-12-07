/**
 * A function that returns true if the item should stay in the list
 */
export interface KeyFunction<incomingT> {
  (to_check: incomingT): boolean;
}
