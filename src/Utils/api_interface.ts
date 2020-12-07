import { ContinentGetter } from "../interfaces/continent";

interface apiT {
  get_all_continents: ContinentGetter;
}

export const api: apiT = {
  get_all_continents: (key) => {
    // make api call for all continents
    const result = [
      { name: "Indar" },
      { name: "Amerish" },
      { name: "Esamir" },
      { name: "Hossin" },
    ];
    return result.filter(key);
  },
};
