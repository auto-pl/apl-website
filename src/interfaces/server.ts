import { Continents, Population } from "./continent";
import { ApiGetter } from "./api";

export type Region = "NA WEST" | "NA EAST" | "EU" | "AS";

export interface Server {
  readonly continents: Continents;
  readonly name: string;
  readonly id: string;
  readonly population: Population;
  readonly region: Region;
}

export type ServerGetter = ApiGetter<Server>;