import { ContinentGetter, ContinentIds as CI } from "../interfaces/continent";

interface apiT {
  get_all_continents: ContinentGetter;
}

const dummy_continents = [
  {
    name: "Indar",
    population: 410,
    base_states: [
      {
        name: "Hvar",
        faction: "TR",
        time_held: 1000,
        captured_by: null,
        continent_id: CI.INDAR,
        leaderboard: null,
        population: { NC: 40, TR: 10, VS: 15 },
        priority_level: 3,
      },
    ],
    locked_by: null,
  },
  {
    name: "Amerish",
    population: 90,
    base_states: [
      {
        name: "Heyoka Chemical Lab",
        faction: "VS",
        time_held: 1000,
        captured_by: null,
        continent_id: CI.AMERISH,
        leaderboard: null,
        population: { NC: 40, TR: 10, VS: 15 },
        priority_level: 3,
      },
    ],
    locked_by: null,
  },
  {
    name: "Esamir",
    population: 780,
    base_states: [
      {
        name: "Pale Canyon Chemical",
        faction: "NC",
        time_held: 1000,
        captured_by: null,
        continent_id: CI.ESAMIR,
        leaderboard: null,
        population: { NC: 40, TR: 10, VS: 15 },
        priority_level: 3,
      },
    ],
    locked_by: null,
  },
  {
    name: "Hossin",
    population: 0,
    base_states: [
      {
        name: "Chac Fusion",
        faction: "NS",
        time_held: 1000,
        captured_by: null,
        continent_id: CI.HOSSIN,
        leaderboard: null,
        population: {
          NC: 0,
          TR: 0,
          VS: 0,
        },
        priority_level: 0,
      },
    ],
    locked_by: "VS",
  },
];

export const api: apiT = {
  get_all_continents: (key) => {
    // make api call for all continents
    const result = dummy_continents;
    return result.filter(key);
  },
};
