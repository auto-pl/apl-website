import React, { useState, FC } from "react";
import {
  ContinentDetails,
  ContinentView,
  ContinentViews,
  Faction,
} from "../../interfaces/continent";
import { get_active_continent } from "../../Utils/apitils";
import {
  get_faction_colour,
  faction_logos,
} from "../../Utils/globals/faction_globals";
import classNames from "classnames";
import { Switcher } from "./switcher/switcher";
import { get_class_names } from "../../Utils/component_utils";
import "../../styles/components/map_switcher/map_switcher.css";
import "../../styles/global/ps2_styles/positioning.css";
import "../../styles/global/ps2_styles/text.css";

export interface MapSwitcherProps {
  continent_views: ContinentViews;
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

const continent_item_classes = (selected: boolean, locked_by: Faction) => {
  return classNames(
    { selected: selected },
    { "locked-NC": locked_by === "NC" },
    { "locked-TR": locked_by === "TR" },
    { "locked-VS": locked_by === "VS" }
  );
};

interface FactionIMGProps {
  locked_by: string | null;
}

const FactionIMG: FC<FactionIMGProps> = ({ locked_by }) => {
  const logo_size = "32px";
  return locked_by ? (
    <img
      className="faction-logo"
      alt={`${locked_by} logo`}
      src={faction_logos.get(locked_by)}
      height={logo_size}
      width={logo_size}
    />
  ) : null;
};

const ContinentItem: FC<ContinentItemProps> = ({
  continent_record,
  selected,
  set_cont,
  url,
}) => {
  const { locked_by, name } = continent_record;

  return (
    <div
      className={get_class_names("continent-item", continent_item_classes)(
        selected,
        locked_by
      )}
      onClick={() => set_cont(continent_record)}
    >
      <a className="font-primary pair-text-image" href={url}>
        <FactionIMG locked_by={locked_by} />
        <span>{name}</span>
      </a>
    </div>
  );
};

export const MapSwitcher: FC<MapSwitcherProps> = ({ continent_views }) => {
  const active_cont = get_active_continent();
  const [current_cont, set_current_cont] = useState(active_cont);
  const check_locked = (c: ContinentDetails): boolean => !!c.locked_by;
  const is_selected = (c: ContinentDetails): boolean => c === current_cont;
  const set_new_cont = (c: ContinentDetails) =>
    check_locked(c) || is_selected(c) ? undefined : set_current_cont(c);

  const items = continent_views.map((cont, i) => {
    console.log(
      `${cont.details.name} is selected: ${is_selected(cont.details)}`
    );
    console.log(
      `${cont.details.name} is locked: ${check_locked(cont.details)}`
    );
    return {
      text: cont.details.name,
      body: (
        <ContinentItem
          continent_record={cont.details}
          selected={is_selected(cont.details)}
          set_cont={set_new_cont}
          url={cont.view_url}
          key={i}
        />
      ),
    };
  });

  return (
    <div className="map-switcher">
      <Switcher header_text={active_cont.name} items={items} />
    </div>
  );
};
