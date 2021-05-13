type SafeReturnType<T> = T extends (...args: any[]) => infer A ? A : never;
/**
 * Get the return type of an async or sync function
 */
type PromiseReturnType<T> = T extends (...args: any[]) => PromiseLike<infer U>
  ? U
  : SafeReturnType<T>;

type WithCacheSignature = <Func extends (...args: any[]) => any>(
  cache?: Record<Parameters<Func>[0], PromiseReturnType<Func>>
) => (
  func: Func
) => (
  ...args: Parameters<Func>
) => PromiseReturnType<Func> | Promise<PromiseReturnType<Func>>;
/**
 * Wrap the given function in a permanent cache.
 * All results of the function will be cached until reload.
 * @param func The function to wrap. The argument must be a string
 * @returns The wrapped function
 */
export const with_cache: WithCacheSignature = (cache = {} as any) => (func) => {
  type Args = Parameters<typeof func>;
  type Key = Args[0];
  type Return = PromiseReturnType<typeof func>;

  const should_call = (key: Key): boolean => !(key in cache);
  const get_key = (args: Args): Key => args[0];
  const add_to_cache = (key: Key) => (result: Return): Return => {
    cache[key] = result;
    return result;
  };
  const is_async = (f: Function) => func.constructor.name === "AsyncFunction";

  const async_wrapper = async (...args: Args) => {
    const key = get_key(args);
    if (should_call(key)) {
      const result: Return = await func(...args);
      return add_to_cache(key)(result);
    }
    return cache[key];
  };

  const sync_wrapper = (...args: Args) => {
    const key = get_key(args);
    if (should_call(key)) {
      const result: Return = func(...args);
      return add_to_cache(key)(result);
    }
    return cache[key];
  };

  return is_async(func) ? async_wrapper : sync_wrapper;
};

const wrapped = with_cache({})((arg1: string): number => 1);
