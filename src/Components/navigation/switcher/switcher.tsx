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

type SwitcherItemArgsSorter = (
  to_sort: Array<SwitcherItemArgs>
) => Array<SwitcherItemArgs>;

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

  /**
   * The function to sort the switcher items on each render.
   * Defaults to sort by disabled => sort alphabetically
   */
  sorting_function?: SwitcherItemArgsSorter;
}

interface SwitcherItemsProps {
  items: Array<SwitcherItemArgs>;
  on_item_select: OnSelectHandler;
  revealed: boolean;
  selected_item_text: string;
  sorting_function: SwitcherItemArgsSorter;
}

const default_sorter: SwitcherItemArgsSorter = (items) =>
  [...items]
    .sort((last, next) => (!last.disabled && next.disabled ? 1 : -1))
    .sort((last, next) => (last.text > next.text ? 1 : -1));

// I extracted this into its own component to make `Switcher`'s return block cleaner
const SwitcherItems: FC<SwitcherItemsProps> = ({
  items,
  on_item_select,
  revealed,
  selected_item_text,
  sorting_function,
}) => {
  const is_selected = (item: SwitcherItemArgs) =>
    item.text === selected_item_text;
  const sorted = sorting_function(items);

  return (
    <div
      className={classNames("switcher-content-container", {
        "switcher-content-container-revealed": revealed,
      })}
    >
      {sorted.map((item, i) => (
        <SwitcherItem
          name={item.text}
          index={i}
          body={item.body}
          on_select={on_item_select}
          key={i}
          disabled={is_selected(item) || item.disabled}
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
  sorting_function,
}) => {
  const [revealed, set_revealed] = useState(false);
  // handle header
  const initial_header = header_text ?? items[0].text;
  const [selected_item_text, set_selected_item_text] = useState(initial_header);
  const sorter = sorting_function || default_sorter;

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
          sorting_function={sorter}
        />
      </div>
    </TextContainer>
  );
};
