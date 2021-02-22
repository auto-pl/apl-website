import React, { FC, ReactNode, memo, MouseEventHandler } from "react";
import { TextContainer } from "../../containers/text_container";
import "../../../styles/components/switcher/switcher.css";
import "../../../styles/global/ps2_styles/text.css";

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
   * This will be called when the item is clicked.
   * The arguments are the same as the props.
   */
  on_select?: OnSelectHandler;
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
    <TextContainer>
      <button className="switcher-item font-primary" onClick={handle_click}>
        {body}
      </button>
    </TextContainer>
  );
};

export const SwitcherItem = memo(_SwitcherItem);
