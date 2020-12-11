import React, { useState, FC, CSSProperties } from "react";
import { ContinentDetails } from "../../interfaces/continent";
import { get_active_continent } from "../../Utils/apitils";
import {
  faction_colours,
  faction_logos,
} from "../../Utils/globals/faction_globals";

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
  continent_record: ContinentDetails;

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
const continent_item_link_style: CSSProperties = {
  display: "inline-block",
};

/**
 * A link to display another continent
 */
const ContinentItem: FC<ContinentItemProps> = (props: ContinentItemProps) => {
  const div_style: CSSProperties = {
    ...continent_item_overlay_style,
    backgroundColor: props.selected ? "rgba(255,255,255, 0.75)" : undefined,
    verticalAlign: "middle",
    height: "32px",
  };
  const locked_by = props.continent_record.locked_by;

  let locked_icon = null;
  if (locked_by) {
    locked_icon = (
      <img
        src={faction_logos.get(locked_by)}
        alt={`Locked by ${locked_by}`}
        height={"32px"}
        width={"32px"}
        style={{ position: "relative", top: "10px" }}
      ></img>
    );
  }

  const locked_style: CSSProperties = {
    backgroundColor: locked_by
      ? faction_colours.get(locked_by)
      : "rgba(0, 0, 0, 0)",
    display: "inline-block",
    border: "1px solid grey",
    padding: "2px 4px 2px 4px",
    width: "20%",
  };

  return (
    <div
      style={div_style}
      onClick={() => props.set_cont(props.continent_record)}
    >
      <span style={locked_style}>
        <a href={props.url} style={continent_item_link_style}>
          {locked_icon}
          <span>{props.continent_record.name}</span>
        </a>
      </span>
    </div>
  );
};

const default_cont = get_active_continent();
const up_arrow: CSSProperties = {
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderWidth: "0 16px 32px 16px",
  borderColor: "transparent transparent #7048e8 transparent",
  position: "relative",
};

export const MapSwitcher: FC<MapSwitcherProps> = (props: MapSwitcherProps) => {
  const [current_cont, set_current_cont] = useState(default_cont);
  const [clicked, set_clicked] = useState(false);

  return (
    <div id="MapSwitcher" onClick={() => set_clicked(!clicked)}>
      <span>
        <span style={up_arrow} />
        {current_cont.name}
      </span>
      {clicked
        ? props.continents.map((cont, i) => (
            <ContinentItem
              continent_record={cont.details}
              key={i}
              selected={cont.details.name === current_cont.name}
              set_cont={set_current_cont}
              url={cont.view_url}
            />
          ))
        : null}
    </div>
  );
};
