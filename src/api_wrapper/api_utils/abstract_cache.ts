export interface InternalCache<Value> {
  [key: string]: Value;
}
export type FrozenCache<T> = Readonly<InternalCache<T>>;
export type CacheKey<T> = keyof InternalCache<T>;

export interface Cache<T> {
  _cache: InternalCache<T>;
  /**
   * Add new keys to the cache. If key collide, the incoming value will be used.
   * Unupdated keys will stay.
   */
  update_cache: (new_cache: InternalCache<T>) => FrozenCache<T>;
  /**
   * Get a read-only copy of the cache.
   */
  get_cache: () => FrozenCache<T>;
  /**
   * Remove all keys from the cache.
   */
  flush_cache: () => FrozenCache<T>;
  /**
   * Get a value by its key from the cache.
   */
  from_cache: (key: CacheKey<T>) => T | null;
  /**
   * Remove a key from the cache.
   */
  delete_key: (Key: CacheKey<T>) => FrozenCache<T>;
  /**
   * Flush and update the cache from an API or something.
   */
  refresh_cache?: () => Promise<FrozenCache<T>>;
}
