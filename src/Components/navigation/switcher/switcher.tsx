import React, {
  CSSProperties,
  FC,
  ReactNode,
  useState,
  useCallback,
} from "react";
import { TextContainer } from "../../containers/text_container";
import { SwitcherItem, OnSelectHandler } from "./switcher_item";
import classNames from "classnames";
import "../../../styles/components/switcher/switcher.css";

export interface SwitcherItemArgs {
  text: string;
  body: ReactNode;
  /**
   * Defaults to false
   */
  disabled?: boolean;
}

export interface SwitcherProps {
  items: Array<SwitcherItemArgs>;
  /** The text to initially display at the top of the switcher.
   * Defaults to the text of the first item of `items`
   */
  header_text?: string;
  /** This callback will be called when a new item is selected. */
  on_select?: (item: SwitcherItemArgs) => void;
  /**
   * Inline styles
   */
  style?: CSSProperties;
  /**
   * A CSS class name
   */
  class_name?: string;
}

interface SwitcherItemsProps {
  items: Array<SwitcherItemArgs>;
  on_item_select: OnSelectHandler;
  revealed: boolean;
  selected_item_text: string;
}

// I extracted this into its own component to make `Switcher`'s return block cleaner
const SwitcherItems: FC<SwitcherItemsProps> = ({
  items,
  on_item_select,
  revealed,
  selected_item_text,
}) => {
  const is_selected = (item: SwitcherItemArgs) =>
    item.text === selected_item_text;

  return (
    <div
      className={classNames("switcher-content-container", {
        "switcher-content-container-revealed": revealed,
      })}
    >
      {items.map((item, i) => (
        <SwitcherItem
          name={item.text}
          index={i}
          body={item.body}
          on_select={on_item_select}
          key={i}
          disabled={is_selected(item)}
        />
      ))}
    </div>
  );
};

export const Switcher: FC<SwitcherProps> = ({
  items,
  header_text,
  on_select = () => {},
  style,
  class_name,
}) => {
  const [revealed, set_revealed] = useState(false);
  // handle header
  const initial_header = header_text ?? items[0].text;
  const [selected_item_text, set_selected_item_text] = useState(initial_header);

  const on_item_select: OnSelectHandler = useCallback(
    (name, i) => {
      const selected = items[i];
      set_selected_item_text(selected.text);
      on_select(selected);
    },
    [items, on_select]
  );

  return (
    <TextContainer style={style} class_name={`switcher ${class_name || ""}`}>
      {/* The click handler is in the div to make sure that the whole thing is covered */}
      <div
        onClick={() => set_revealed(!revealed)}
        className="switcher-container"
      >
        <SwitcherItem
          name="header"
          index={0}
          header
          body={selected_item_text}
        />
        <SwitcherItems
          revealed={revealed}
          items={items}
          on_item_select={on_item_select}
          selected_item_text={selected_item_text}
        />
      </div>
    </TextContainer>
  );
};
