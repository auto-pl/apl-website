import React, { useState, FC, CSSProperties } from "react";
import { ContinentDetails } from "../../interfaces/continent";
import { get_active_continent } from "../../Utils/apitils";

interface MapSwitcherProps {
  /**
   * @member details: the information about the continent
   * @member view_url: the URL to the view of the continent
   */
  continents: Array<{ view_url: string; details: ContinentDetails }>;
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

  /**
   * The URL to the target continent's view
   */
  url: string;
}

// TODO: add styles
const continent_item_overlay_style: CSSProperties = {};
const continent_item_link_style: CSSProperties = {};

/**
 * A link to display another continent
 */
const ContinentItem: FC<ContinentItemProps> = (props: ContinentItemProps) => {
  const style: CSSProperties = {
    ...continent_item_overlay_style,
    backgroundColor: props.selected ? "rgba(255,255,255, 0.5)" : undefined,
  };
  return (
    <div style={style}>
      <a href={props.url} style={continent_item_link_style}>
        {props.continent_details.name}
      </a>
    </div>
  );
};

const default_cont = get_active_continent();

export const MapSwitcher: FC<MapSwitcherProps> = (props: MapSwitcherProps) => {
  const [current_cont, set_current_cont] = useState(default_cont);

  return (
    <div id="MapSwitcher">
      {props.continents.map((cont, i) => (
        <ContinentItem
          continent_details={cont.details}
          key={i}
          selected={cont.details.name === current_cont.name}
          set_cont={set_current_cont}
          url={cont.view_url}
        />
      ))}
    </div>
  );
};
