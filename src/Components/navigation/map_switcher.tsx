import React, { useState, FC } from "react";
import { ContinentDetails, ContinentViews } from "../../interfaces/continent";
import { get_active_continent } from "../../Utils/apitils";
import { faction_logos } from "../../Utils/globals/faction_globals";
import { TextContainer } from "../containers/text_container";
import "../../styles/map_switcher/map_switcher.css";
import "../../styles/global/ps2_styles/sizing.css";
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
    <TextContainer
      class_name={`continent-item ${selected ? "selected" : ""} ${
        locked_by ? get_faction_class(locked_by) : ""
      }`}
      on_click={() => set_cont(continent_record)}
    >
      <a className="font-primary" href={url}>
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
    </TextContainer>
  );
};

export const MapSwitcher: FC<MapSwitcherProps> = ({ continents }) => {
  const active_cont = get_active_continent();
  const [current_cont, set_current_cont] = useState(active_cont);
  return (
    <TextContainer class_name="switcher">
      <details style={{ outline: "none" }}>
        <summary>{active_cont.name}</summary>
        {continents.map((cont, i) => (
          <ContinentItem
            continent_record={cont.details}
            selected={current_cont === cont.details}
            set_cont={(c) => set_current_cont(c)}
            url={cont.view_url}
            key={i}
          />
        ))}
      </details>
    </TextContainer>
  );
};
