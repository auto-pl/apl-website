import { api } from "./api_interface";
import { ContinentDetails } from "../interfaces/continent";

/**
 * Get the continent with the most population
 */
export const get_active_continent: () => ContinentDetails = () => {
  const continents = api.get_all_continents();
  return continents.reduce((top_cont, current_cont) =>
    current_cont.population > top_cont.population ? current_cont : top_cont
  );
};
