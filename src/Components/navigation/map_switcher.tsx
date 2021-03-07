import React, { useState, FC, useCallback } from "react";
import {
  ContinentDetails,
  ContinentViews,
  faction,
} from "../../interfaces/continent";
import { get_active_continent } from "../../Utils/apitils";
import { faction_logos } from "../../Utils/globals/faction_globals";
import classNames from "classnames";
import { Switcher } from "./switcher/switcher";
import { get_class_names } from "../../Utils/component_utils";
import "../../styles/components/map_switcher/map_switcher.css";
import "../../styles/global/ps2_styles/positioning.css";
import "../../styles/global/ps2_styles/text.css";

export interface MapSwitcherProps {
  continent_views: ContinentViews;
}

type LockChecker = (continent: ContinentDetails) => boolean;

interface ContinentItemProps {
  /**
   * All relevant information about the continent to link to
   */
  continent_record: ContinentDetails;

  /**
   * The URL to the target continent's view
   */
  url: string;

  check_locked: LockChecker;
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
  url,
  check_locked,
}) => {
  const { locked_by, name } = continent_record;

  return (
    <div
      className={get_class_names(
        "continent-item",
        continent_item_classes
      )(locked_by)}
    >
      <a className="font-primary pair-text-image" href={url}>
        <FactionIMG locked_by={locked_by} />
        {name}
      </a>
    </div>
  );
};

export const MapSwitcher: FC<MapSwitcherProps> = ({ continent_views }) => {
  const active_cont = get_active_continent();
  const check_locked = (c: ContinentDetails): boolean => !!c.locked_by;

  const items = continent_views.map((cont, i) => ({
    text: cont.details.name,
    body: (
      <ContinentItem
        continent_record={cont.details}
        url={cont.view_url}
        key={i}
        check_locked={check_locked}
      />
    ),
    disabled: check_locked(cont.details),
  }));

  return (
    <div className="map-switcher">
      <Switcher header_text={active_cont.name} items={items} />
    </div>
  );
};
