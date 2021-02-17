import { Continents, Population } from "./continent";

export type Region = "NA WEST" | "NA EAST" | "EU" | "AS";

export interface Server {
  readonly continents: Continents;
  readonly name: string;
  readonly id: string;
  readonly population: Population;
  readonly region: Region;
}
