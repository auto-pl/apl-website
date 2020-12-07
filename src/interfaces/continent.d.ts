import { ApiGetter } from "./api";

export interface ContinentDetails {
  name: string;
  population: number;
}

export type ContinentGetter = ApiGetter<ContinentDetails>;
