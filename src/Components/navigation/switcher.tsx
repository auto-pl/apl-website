import React, { CSSProperties, FC, ReactNode, useState } from "react";
import { TextContainer } from "../containers/text_container";
import "../../styles/components/switcher/switcher.css";

export interface SwitcherItem {
  text: string;
  body: ReactNode;
}

export interface SwitcherProps {
  items: Array<SwitcherItem>;
  /** The text to initially display at the top of the switcher.
   * Defaults to the text of the first item of `items`
   */
  header_text?: string;
  /** This callback will be called when a new item is selected. */
  on_select?: (item: SwitcherItem) => void;
  /**
   * Inline styles
   */
  style?: CSSProperties;
  /**
   * A CSS class name
   */
  class_name?: string;
}

export const Switcher: FC<SwitcherProps> = ({
  items,
  header_text,
  on_select = () => {},
  style,
  class_name,
}) => {
  // handle header
  const header_item = { text: header_text, body: <span>{header_text}</span> };
  const [selected_item, set_selected_item] = useState(
    header_item.text ? header_item : items[0]
  );

  const on_select_cb = (i: number) => {
    const selected = items[i];
    set_selected_item(selected);
    on_select(selected);
  };

  return (
    <TextContainer style={style} class_name={`switcher ${class_name}`}>
      <details>
        <summary>{selected_item.text}</summary>
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
