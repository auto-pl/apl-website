import React, { memo, useReducer, Reducer } from "react";
import { BaseState } from "../../../interfaces/continent";
import { HoverMenu } from "../../menus/hover_menu";
import { PopulationReport } from "../../visualisation/populations";
import { HexImg } from "./hex_img";
import { get_priority_style } from "./hex_priority";

interface HexProps {
  base_state: BaseState;
  /**
   * Whether it should be a grey out-of-map hex
   */
  out_of_bounds: boolean;
}

interface HexState {
  base_state: BaseState;
  hovered: boolean;
}

export enum ACTION_TYPES {
  clicked = "clicked",
  hovered = "hovered",
}

const reducer: Reducer<HexState, string> = (state, action): HexState => {
  switch (action) {
    case ACTION_TYPES.clicked: // TODO: do something on click
      return state;
    case ACTION_TYPES.hovered:
      return { ...state, hovered: !state.hovered };
    default:
      throw new Error(
        "Invalid action. See src/Components/map/hex.ACTION_TYPES for the valid types."
      );
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
    hovered: false,
  });
  // !Saved for V2
  // const priority_style = get_priority_style(props.base_state.priority_level);
  const priority_style = "";

  return (
    <div>
      <div
        id={`Hex_continent=${props.base_state.continent_id}_id=${props.base_state.id}`}
      ></div>
      <HexImg
        id={props.base_state.id}
        priority_class_name={priority_style}
        hover={() => dispatch(ACTION_TYPES.hovered)}
      />
      {state.hovered ? (
        <HoverMenu
          title={props.base_state.name}
          body_items={[
            <PopulationReport populations={props.base_state.population} />,
          ]}
          options={{ fixed_position: "bottom right" }}
        />
      ) : null}
    </div>
  );
}, check_for_hex_update);
