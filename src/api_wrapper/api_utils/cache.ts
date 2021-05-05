type KeyCompatible = string | number;
/**
 * Wrap the given function in a permanent cache.
 * All results of the function will be cached until reload.
 * @param func The function to wrap. The argument must be a string or number.
 * @returns The wrapped function
 */
const with_cache = <KeyType extends KeyCompatible, ReturnType>(
  cache: Record<KeyType, ReturnType> = {} as Record<KeyType, ReturnType>
) => (func: (arg: KeyType) => ReturnType): ((arg: KeyType) => ReturnType) => {
  return (arg) => {
    if (!cache[arg]) {
      const result = func(arg);
      cache[arg] = result;
      return result;
    }
    return cache[arg];
  };
};

export default with_cache;
