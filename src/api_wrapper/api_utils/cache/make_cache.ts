import { Cache as AbstractCache } from "./abstract_cache";
export type { Cache as AbstractCache } from "./abstract_cache";

type CacheOverrides<T> = Partial<AbstractCache<T>>;

/**
 * Factory for caches so that you don't have to use a lot of boilerplate.
 * NOTE: you'll need to cast the result of this function.
 * E.G: `const NameCache = make_cache(overrides) as AbstractCache<NameType>;`
 * @param overrides Any method implementations you want to override.
 * @returns The cache with the overridden methods.
 */
export const make_cache = <T>(
  overrides: CacheOverrides<T> = {}
): AbstractCache<T> => {
  const BaseCache: AbstractCache<T> = {
    _cache: {},
    get_cache: function () {
      return Object.freeze(this._cache);
    },
    update_cache: function (new_cache) {
      this._cache = { ...this._cache, ...new_cache };
      return this.get_cache();
    },
    flush_cache: function () {
      this._cache = {};
      return this.get_cache();
    },
    get_key: function (id) {
      return this.get_cache()[id] || null;
    },
    delete_key: function (id) {
      delete this._cache[id];
      return this.get_cache();
    },
  };
  return { ...BaseCache, ...overrides };
};
