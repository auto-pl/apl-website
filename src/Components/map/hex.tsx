import React, { memo, useReducer, Reducer } from "react";
import { BaseState } from "../../interfaces/continent";
import { HexImg } from "./hex_img";
import "../../styles/hex.css";

interface HexProps {
  base_state: BaseState;
  /**
   * The id of the base SVG
   */
  base_id: string;
  /**
   * The callback to show the hover menu when the hex is hovered.
   */
  show_hover_menu: (base_state: BaseState) => void; // NOTE: This is needed because the menu needs to be outside the container the hex is in
  /**
   * Whether it should be a grey out-of-map hex
   */
  out_of_bounds: boolean;
}

interface HexState {
  base_state: BaseState;
}

export enum ACTION_TYPES {
  clicked = "clicked",
  priority_changed = "priority_changed",
}

const reducer: Reducer<HexState, string> = (state, action): HexState => {
  switch (action) {
    case ACTION_TYPES.clicked: // TODO: do something on click
      return state;
    case ACTION_TYPES.priority_changed: // TODO: make the hex flash with increased saturation and speed depending on the priority
      return state;
    default:
      throw new Error(
        "Invalid action. See src/Components/map/hex.ACTION_TYPES for the valid types."
      );
  }
};

/**
 * Get the appropriate animation class names for the priority level
 * @param priority The priority score assigned by the AI
 * @returns a CSS class name in `hex.sass`
 */
const get_priority_style = (priority: number): string => {
  switch (Math.round(priority / 25)) {
    case 1:
      return "HexPriorityLow HexPriorityLowAnimated";
    case 2:
      return "HexPriorityMed HexPriorityMedAnimated";
    case 3:
      return "HexPriorityHigh HexPriorityHighAnimated";
    case 4:
      return "HexPriorityExtreme HexPriorityExtremeAnimated";
    default:
      return "Hex";
  }
};

/**
 * This function is for preventing the hex from rerendering until it flips ownership.
 * @param prev_props The old props
 * @param new_props The new props
 */
const check_for_hex_update = (prev_props: HexProps, new_props: HexProps) => {
  return new_props.base_state.captured_by !== prev_props.base_state.captured_by;
};

export const Hex = memo<HexProps>((props) => {
  const [state, dispatch] = useReducer(reducer, {
    base_state: props.base_state,
  });

  return (
    <div onMouseOver={() => props.show_hover_menu(props.base_state)}>
      <div
        id={`Hex_continent=${props.base_state.continent_id}_id=${props.base_id}`}
      ></div>
      <HexImg id={props.base_id} />
    </div>
  );
}, check_for_hex_update);
