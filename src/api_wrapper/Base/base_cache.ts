import { BaseInfo } from "../../interfaces/continent";

export type BaseCacheT = Record<number, BaseInfo>;
let BaseCache: BaseCacheT = {};

/**
 * Get a read-only copy of the current cache.
 * @returns The current base cache.
 */
export const get_base_cache = (): BaseCacheT => Object.freeze(BaseCache);

/**
 * Replaces the internal cache's keys with the provided keys.
 * Unprovided keys will be assumed to be still accurate.
 * @param new_cache The new keys to add/update
 * @returns The new cache.
 */
export const update_base_cache = (new_cache: BaseCacheT): BaseCacheT => {
  BaseCache = { ...BaseCache, ...new_cache };
  return get_base_cache();
};

/**
 * Get the latest base info objects from the API and update the internal cache.
 * @returns The new cache.
 */
export const refresh_base_cache = async (): Promise<BaseCacheT> => {
  // TODO: request base cache
  // TODO: API request
  // TODO: map BaseInfo converter on result
  // TODO re: ^ maybe that should be mixed into the request function
  const result = {};
  return update_base_cache(result);
};

/**
 * Get a base from the cache.
 * @param id The ID of the base to get.
 * @returns The base or `null` if not found.
 */
export const from_base_cache = (id: number): BaseInfo | null =>
  get_base_cache()[id] || null;

/**
 * Clear the cache.
 * @returns The new cache.
 */
export const flush_cache = (): BaseCacheT => {
  BaseCache = {};
  return get_base_cache();
};
