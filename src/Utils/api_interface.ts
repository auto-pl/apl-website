import {
  ContinentGetter,
  ContinentDetails,
  ContinentIds as CI,
} from "../interfaces/continent";
import { Server, ServerGetter } from "../interfaces/server";

interface apiT {
  get_all_continents: ContinentGetter;
  get_all_servers: ServerGetter;
}

const dummy_continents: Array<ContinentDetails> = [
  {
    name: "Indar",
    population: {
      TR: 200,
      VS: 180,
      NC: 220,
    },
    base_states: async () => [
      {
        name: "Hvar",
        faction: "TR",
        time_held: 1000,
        captured_by: null,
        continent_id: CI.INDAR,
        population: { NC: 40, TR: 10, VS: 15 },
        priority_level: 25,
        id: "15",
      },
      {
        name: "Hvar Databank",
        faction: "VS",
        time_held: 8700,
        captured_by: null,
        continent_id: CI.INDAR,
        population: { NC: 0, TR: 80, VS: 6 },
        priority_level: 3,
        id: "19",
      },
      {
        name: "Quartz Ridge Camp",
        faction: "TR",
        time_held: 8000,
        captured_by: null,
        continent_id: CI.INDAR,
        population: { NC: 60, TR: 40, VS: 2 },
        priority_level: 50,
        id: "27",
      },
    ],
    locked_by: null,
  },
  {
    name: "Amerish",
    population: {
      TR: 150,
      VS: 140,
      NC: 130,
    },
    base_states: async () => [
      {
        name: "Heyoka Chemical Lab",
        faction: "VS",
        time_held: 1000,
        captured_by: null,
        continent_id: CI.AMERISH,
        population: { NC: 40, TR: 10, VS: 15 },
        priority_level: 3,
        id: "1",
      },
    ],
    locked_by: null,
  },
  {
    name: "Esamir",
    population: {
      TR: 80,
      VS: 70,
      NC: 30,
    },
    base_states: async () => [
      {
        name: "Pale Canyon Chemical",
        faction: "NC",
        time_held: 1000,
        captured_by: null,
        continent_id: CI.ESAMIR,
        population: { NC: 40, TR: 10, VS: 15 },
        priority_level: 3,
        id: "13",
      },
    ],
    locked_by: null,
  },
  {
    name: "Hossin",
    population: {
      TR: 300,
      VS: 300,
      NC: 300,
    },
    base_states: async () => [
      {
        name: "Chac Fusion",
        faction: "NS",
        time_held: 1000,
        captured_by: null,
        continent_id: CI.HOSSIN,
        population: {
          NC: 0,
          TR: 0,
          VS: 0,
        },
        priority_level: 0,
        id: "12",
      },
    ],
    locked_by: "VS",
  },
];

const dummy_servers: Array<Server> = [
  {
    name: "Miller",
    id: "2",
    region: "EU",
    population: {
      NC: 400,
      TR: 380,
      VS: 350,
    },
    continents: dummy_continents,
  },
  {
    name: "Emerald",
    id: "4",
    region: "NA EAST",
    population: {
      NC: 100,
      TR: 140,
      VS: 260,
    },
    continents: dummy_continents,
  },
  {
    name: "Connery",
    id: "6",
    region: "NA WEST",
    population: {
      NC: 20,
      TR: 10,
      VS: 30,
    },
    continents: dummy_continents,
  },
  {
    name: "Soltech",
    id: "6",
    region: "AS",
    population: {
      NC: 800,
      TR: 400,
      VS: 200,
    },
    continents: dummy_continents,
  },
];

export const api: apiT = {
  get_all_continents: (key?) => {
    // make api call for all continents
    const result = dummy_continents;
    if (!key) return result;
    return result.filter(key);
  },
  get_all_servers: (key?) => {
    // make API call
    const result = dummy_servers;
    if (!key) return result;
    return result.filter(key);
  },
};
