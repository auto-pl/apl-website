export interface ContinentDetails {
  name: string;
}

export const get_active_continent: () => ContinentDetails = () => {
  return { name: "Amerish" };
};
