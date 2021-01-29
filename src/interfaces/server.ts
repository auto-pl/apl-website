import { ContinentDetails, Population } from "./continent";

export type Region = "NA WEST" | "NA EAST" | "EU" | "AS";

export interface Server {
  continents: ContinentDetails;
  name: string;
  id: string;
  population: Population;
  region: Region;
}
