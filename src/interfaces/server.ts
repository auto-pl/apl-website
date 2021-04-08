import { Continents, Population } from "./continent";
import { ApiGetter } from "./api";

export type Region = "NA" | "EU" | "AS";

export type Servers = Array<Server>;

export interface Server {
  readonly name: string;
  readonly id: string;
  readonly region: Region;
  readonly population: Population;
  readonly continents: Continents;
}

export type ServerGetter = ApiGetter<Server>;
