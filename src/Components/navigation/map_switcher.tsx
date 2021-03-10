import React, { FC } from "react";
import { ContinentDetails, faction } from "../../interfaces/continent";
import { PS2Button, ButtonType } from "../inputs/buttons/ps2button";
import { get_active_continent } from "../../Utils/apitils";
import { faction_logos } from "../../Utils/globals/faction_globals";
import classNames from "classnames";
import { Switcher } from "./switcher/switcher";
import { get_class_names } from "../../Utils/component_utils";
import "../../styles/components/map_switcher/map_switcher.css";
import "../../styles/global/ps2_styles/positioning.css";
import "../../styles/global/ps2_styles/text.css";

type ContinentChangeHandler = (cont: ContinentDetails) => void;

export interface MapSwitcherProps {
  continents: Array<ContinentDetails>;
  /**
   * This function should handle displaying the new continent
   */
  set_new_continent: ContinentChangeHandler;
}

interface ContinentItemProps {
  /**
   * All relevant information about the continent to link to
   */
  continent: ContinentDetails;
  set_new_continent: ContinentChangeHandler;
}

const continent_item_classes = (locked_by: faction) => {
  return classNames(
    { "locked-NC": locked_by === "NC" },
    { "locked-TR": locked_by === "TR" },
    { "locked-VS": locked_by === "VS" }
  );
};

interface FactionIMGProps {
  locked_by: string | null;
}

const FactionIMG: FC<FactionIMGProps> = ({ locked_by }) => {
  return locked_by ? (
    <img
      className="faction-logo"
      alt={`${locked_by} logo`}
      src={faction_logos.get(locked_by)}
    />
  ) : null;
};

const ContinentItem: FC<ContinentItemProps> = ({
  continent,
  set_new_continent,
}) => {
  const { locked_by, name } = continent;

  // !TODO: center the text
  return (
    <span
      className={get_class_names(
        "continent-item pair-text-image",
        continent_item_classes
      )(locked_by)}
      onClick={() => set_new_continent(continent)}
    >
      <FactionIMG locked_by={locked_by} />
      {name}
    </span>
  );
};

export const MapSwitcher: FC<MapSwitcherProps> = ({
  continents,
  set_new_continent,
}) => {
  const active_cont = get_active_continent();
  const check_locked = (c: ContinentDetails): boolean => !!c.locked_by;
  // [...continent] makes a copy to prevent mutating the prop
  const sorted_continents = [...continents].sort((last, next) =>
    next.name > last.name ? -1 : 1
  );

  const items = sorted_continents.map((cont, i) => ({
    text: cont.name,
    body: (
      <ContinentItem
        continent={cont}
        key={i}
        set_new_continent={set_new_continent}
      />
    ),
    disabled: check_locked(cont),
  }));

  return (
    <div className="map-switcher">
      <Switcher header_text={active_cont.name} items={items} />
    </div>
  );
};
