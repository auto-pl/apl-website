import React, { FC, ReactNode, memo, MouseEventHandler } from "react";
import { get_class_names } from "../../../Utils/component_utils";
import classNames from "classnames";
import "../../../styles/components/switcher/switcher.css";
import "../../../styles/global/ps2_styles/text.css";
import { PS2Button, ButtonType } from "../../inputs/buttons/ps2button";

export type OnSelectHandler = (name: string, index: number) => void;

export interface SwitcherItemProps {
  /**
   * This name will be displayed as the header when selected.
   */
  name: string;
  /**
   * The node to display for this item when the `Switcher` is expanded.
   */
  body: ReactNode;
  /**
   * The index of the item in the `Switcher`
   */
  index: number;
  /**
   * If this is the header button
   */
  header?: boolean;
  /**
   * This will be called when the item is clicked.
   * The arguments are the same as the props.
   */
  on_select?: OnSelectHandler;
  disabled?: boolean;
}

const get_class = get_class_names("", (disabled: boolean) => {
  return classNames({ "switcher-item-disabled": disabled });
});

/**
 * One of multiple items in a `Switcher`.
 * Supports custom items instead of just text like `PS2DropDown` (example below).
 *
 * `<span><img href="DTWM-chan.icon.png" />All hail DTWM-chan!</span>`
 */
const _SwitcherItem: FC<SwitcherItemProps> = ({
  name,
  body,
  index,
  header = false,
  on_select = (name, index) => {},
  disabled = false,
}) => {
  const handle_click: MouseEventHandler = (e) => {
    e.preventDefault();
    on_select(name, index);
  };

  return (
    <span className="switcher-item">
      <PS2Button
        className={get_class(disabled)}
        disable_click_animation={header || disabled}
        button_type={ButtonType.NO_SIDES}
        onClick={handle_click}
        disabled={disabled}
      >
        {body}
      </PS2Button>
    </span>
  );
};

export const SwitcherItem = memo(_SwitcherItem);
