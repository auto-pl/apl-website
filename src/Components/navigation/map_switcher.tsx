import React, { useState, FC } from "react";
import { ContinentDetails } from "../../interfaces/continent";
import { get_active_continent } from "../../Utils/apitils";

interface MapSwitcherProps {
  /**
   * The continents to display
   */
  continents: Array<ContinentDetails>;
}

interface ContinentItemProps {
  /**
   * All relevant information about the continent to link to
   */
  continent_details: ContinentDetails;

  /**
   * Whether this item is the currently viewed continent.
   */
  selected: boolean;

  /**
   * The function to update the parent's state when this item is selected.
   */
  set_cont: (new_continent: ContinentDetails) => void;
}

/**
 * A link to display another continent
 */
const ContinentItem: FC<ContinentItemProps> = (props: ContinentItemProps) => {
  return <div></div>;
};

const default_cont = get_active_continent();

export const MapSwitcher: FC<MapSwitcherProps> = (props: MapSwitcherProps) => {
  const [current_cont, set_current_cont] = useState(default_cont);

  return (
    <div id="MapSwitcher">
      {props.continents.map((cont, i) => (
        <ContinentItem
          continent_details={cont}
          key={i}
          selected={cont.name === current_cont.name}
          set_cont={set_current_cont}
        />
      ))}
    </div>
  );
};
