import { ContinentGetter, ContinentIds as CI } from "../interfaces/continent";

interface apiT {
  get_all_continents: ContinentGetter;
}

export const api: apiT = {
  get_all_continents: (key) => {
    // make api call for all continents
    const result = [
      {
        name: "Indar",
        population: 410,
        locked: false,
        base_states: [
          {
            name: "Hvar",
            faction: "TR",
            time_held: 1000,
            captured_by: null,
            continent_id: CI.Indar,
            leaderboard: null,
          },
        ],
      },
      {
        name: "Amerish",
        population: 90,
        locked: false,
        base_states: [
          {
            name: "Heyoka Chemical Lab",
            faction: "VS",
            time_held: 1000,
            captured_by: null,
            continent_id: CI.Amerish,
            leaderboard: null,
          },
        ],
      },
      {
        name: "Esamir",
        population: 780,
        locked: false,
        base_states: [
          {
            name: "Pale Canyon Chemical",
            faction: "NC",
            time_held: 1000,
            captured_by: null,
            continent_id: CI.Esamir,
            leaderboard: null,
          },
        ],
      },
      {
        name: "Hossin",
        population: 0,
        locked: true,
        base_states: [
          {
            name: "Chac Fusion",
            faction: "NS",
            time_held: 1000,
            captured_by: null,
            continent_id: CI.Hossin,
            leaderboard: null,
          },
        ],
      },
    ];
    return result.filter(key);
  },
};
