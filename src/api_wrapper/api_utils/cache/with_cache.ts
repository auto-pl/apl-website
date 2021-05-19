type SafeReturnType<T> = T extends (...args: any[]) => infer A ? A : never;
/**
 * Get the return type of an async or sync function
 */
type PromiseReturnType<T> = T extends (...args: any[]) => PromiseLike<infer U>
  ? U
  : SafeReturnType<T>;

type WrappedWithCache<Args extends any[], Return> = (
  ...args: Args
) => Return extends PromiseLike<Return> ? Promise<Return> : Return;

const is_async = (f: Function) => f.constructor.name === "AsyncFunction";

const test: <Func extends (...args: any[]) => any>(
  func: Func
) =>
  | ((...args: Parameters<Func>) => Promise<PromiseReturnType<Func>>)
  | ((...args: Parameters<Func>) => ReturnType<Func>) = (func) => {
  type AsyncReturn = (
    ...args: Parameters<typeof func>
  ) => Promise<PromiseReturnType<typeof func>>;
  type SyncReturn = (
    ...args: Parameters<typeof func>
  ) => ReturnType<typeof func>;
  return is_async(func)
    ? ((async (...args) => await func(...args)) as AsyncReturn)
    : (((...args) => func(...args)) as SyncReturn);
};

const res = test((arg: string): number => 1);
const try_ = res("one");

/**
 * Wrap the given function in a permanent cache.
 * All results of the function will be cached until reload.
 * @param func The function to wrap. The argument must be a string
 * @returns The wrapped function
 */
export const with_cache = <Func extends (...args: any[]) => any>(
  func: Func
) => <
  Return extends PromiseReturnType<typeof func>,
  Args extends Parameters<typeof func>,
  Key extends Args[0]
>(
  cache: Record<
    Parameters<Func>[0],
    PromiseReturnType<Func>
  > = {} as typeof cache
): WrappedWithCache<Parameters<Func>, PromiseReturnType<Func>> => {
  type Args = Parameters<typeof func>;
  type Key = Args[0];
  type Return = PromiseReturnType<typeof func>;

  const should_call = (key: Key): boolean => !(key in cache);
  const get_key = (args: Args): Key => args[0];
  const add_to_cache = (key: Key) => (result: Return): Return => {
    cache[key] = result;
    return result;
  };

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

const wrapped = with_cache((arg1: string): number => 1)({});
