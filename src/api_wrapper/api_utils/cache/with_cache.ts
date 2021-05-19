import { AbstractCache } from "./";

/**
 * Wrap the given function in a permanent cache.
 * All results of the function will be cached until reload.
 * @param func The function to wrap. The argument must be a string
 * @returns The wrapped function
 */
export const with_cache = <Args extends any[], Return>(
  func: (...args: Args) => Return,
  cache: AbstractCache<Return> = {} as typeof cache
): typeof func => {
  return (...args): Return => {
    const key = args[0];
    if (key in cache.get_cache()) {
      return cache.get_key(key) as Return; // It's safe to assume this does not return null because the key is known to be valid
    }
    const result = func(...args);
    cache.update_cache({ key: result });
    return result;
  };
};
