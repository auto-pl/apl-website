import React, { ComponentType, FC, ReactNode, useState } from "react";
import { TextContainer } from "../containers/text_container";
import "../../styles/components/switcher/switcher.css";

export interface SwitcherItem {
  name: string;
  body: ReactNode;
}

export interface SwitcherProps {
  items: Array<SwitcherItem>;
  /** The item to initially display at the top of the switcher.
   * Defaults tot he first item of `items`
   */
  first_item?: SwitcherItem;
  /** This callback will be called when a new item is selected. */
  on_select?: (item: SwitcherItem) => void;
}

export const Switcher: FC<SwitcherProps> = ({
  items,
  first_item,
  on_select = () => {},
}) => {
  const [selected_item, set_selected_item] = useState(first_item ?? items[0]);
  const on_select_cb = (i: number) => {
    const selected = items[i];
    set_selected_item(selected);
    on_select(selected);
  };
  return (
    <TextContainer class_name="switcher">
      <details>
        <summary>{selected_item.name}</summary>
        {items.map((e, i) => (
          <TextContainer
            key={i}
            on_click={() => on_select_cb(i)}
            class_name="item"
          >
            {e.body}
          </TextContainer>
        ))}
      </details>
    </TextContainer>
  );
};
