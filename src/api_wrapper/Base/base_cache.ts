import { BaseInfo } from "../../interfaces/continent";
import { Cache } from "../api_utils/abstract_cache";

const BaseCache: Cache<BaseInfo> = {
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
  from_cache: function (id) {
    return this.get_cache()[id] || null;
  },
  delete_key: function (id) {
    delete this._cache[id];
    return this.get_cache();
  },
  refresh_cache: async function () {
    // TODO: request base cache
    // TODO: API request
    // TODO: map BaseInfo converter on result
    // TODO re: ^ maybe that should be mixed into the request function
    const result = {};
    return this.update_cache(result);
  },
};
export default BaseCache;
