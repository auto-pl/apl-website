import React, {
  CSSProperties,
  FC,
  ReactNode,
  useState,
  useCallback,
} from "react";
import { TextContainer } from "../../containers/text_container";
import { SwitcherItem, OnSelectHandler } from "./switcher_item";
import "../../../styles/components/switcher/switcher.css";

export interface SwitcherItemArgs {
  text: string;
  body: ReactNode;
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
}

// I extracted this into its own component to make `Switcher`'s return block cleaner
const SwitcherItems: FC<SwitcherItemsProps> = ({ items, on_item_select }) => {
  return (
    <div className="switcher-content-container switcher-focused">
      {items.map((item, i) => (
        <SwitcherItem
          name={item.text}
          index={i}
          body={item.body}
          on_select={on_item_select}
          key={i}
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
  // focus callbacks
  const [focused, set_focused] = useState(false);
  console.log(focused);

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
    <TextContainer style={style} class_name={`switcher ${class_name}`}>
      <div
        className="switcher-container"
        onMouseLeave={() => set_focused(false)}
      >
        <button
          onClick={() => set_focused(!focused)}
          className="switcher-header-button"
        >
          {selected_item_text}
        </button>
        {focused ? (
          <SwitcherItems items={items} on_item_select={on_item_select} />
        ) : null}
      </div>
    </TextContainer>
  );
};
