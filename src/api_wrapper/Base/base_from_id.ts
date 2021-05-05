import { BaseInfo } from "../../interfaces/continent";
import { BaseCache } from "./base_cache";

const info_from_id = (id: number): BaseInfo => BaseCache[id];

export default info_from_id;
