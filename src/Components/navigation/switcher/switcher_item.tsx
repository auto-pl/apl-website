import React, { FC, ReactNode, memo, MouseEventHandler } from "react";
import "../../../styles/components/switcher/switcher.css";

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
   * This will be called when the item is clicked.
   * The arguments are the same as the props.
   */
  on_select?: (name: string, index: number) => void;
}

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
  on_select = (name, index) => {},
}) => {
  const handle_click: MouseEventHandler = (e) => {
    e.preventDefault();
    on_select(name, index);
  };

  return (
    <button className="switcher-item" onClick={handle_click}>
      {body}
    </button>
  );
};

export const SwitcherItem = memo(_SwitcherItem);
