import React, { useState, FC } from "react";
import { ContinentDetails, ContinentViews } from "../../interfaces/continent";
import { get_active_continent } from "../../Utils/apitils";
import {
  get_faction_colour,
  faction_logos,
} from "../../Utils/globals/faction_globals";
import { Switcher } from "./switcher";
import "../../styles/components/map_switcher/map_switcher.css";
import "../../styles/global/ps2_styles/positioning.css";
import "../../styles/global/ps2_styles/text.css";

interface MapSwitcherProps {
  continents: ContinentViews;
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

const ContinentItem: FC<ContinentItemProps> = ({
  continent_record,
  selected,
  set_cont,
  url,
}) => {
  const { locked_by, name } = continent_record;
  const get_faction_class = (faction_name: string) => `locked-${faction_name}`;
  const logo_size = "32px";

  return (
    <div
      className={`continent-item ${selected ? "selected" : ""} ${
        locked_by ? get_faction_class(locked_by) : ""
      }`}
      style={{
        backgroundColor: locked_by
          ? get_faction_colour(locked_by, false)
          : undefined,
        height: "100%",
        width: "100%",
      }}
      onClick={() => set_cont(continent_record)}
    >
      <a className="font-primary pair-text-image" href={url}>
        {locked_by ? (
          <img
            alt={`${locked_by} logo`}
            src={faction_logos.get(locked_by)}
            height={logo_size}
            width={logo_size}
          />
        ) : null}
        <span style={{ paddingLeft: locked_by ? undefined : logo_size }}>
          {name}
        </span>
      </a>
    </div>
  );
};

export const MapSwitcher: FC<MapSwitcherProps> = ({ continents }) => {
  const active_cont = get_active_continent();
  const [current_cont, set_current_cont] = useState(active_cont);

  const items = continents.map((cont, i) => ({
    text: cont.details.name,
    body: (
      <ContinentItem
        continent_record={cont.details}
        selected={current_cont === cont.details}
        set_cont={(c) => set_current_cont(c)}
        url={cont.view_url}
        key={i}
      />
    ),
  }));

  return <Switcher header_text={active_cont.name} items={items} />;
};
