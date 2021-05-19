/**
 * Wrap the given function in a permanent cache.
 * All results of the function will be cached until reload.
 * @param func The function to wrap. The argument must be a string
 * @returns The wrapped function
 */
export const with_cache = <Args extends any[], Return>(
  func: (...args: Args) => Return,
  cache: Record<Args[0], Return> = {} as typeof cache
): typeof func => {
  return (...args): Return => {
    const key: Args[0] = args[0];
    if (key in cache) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
};
