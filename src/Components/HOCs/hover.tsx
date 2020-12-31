import React, { ComponentType, useState, FC } from "react";
import { HoverMenu, HoverMenuProps } from "../menus/hover_menu";
import { PopulationReport } from "../visualisation/populations";

type WithHoverMenuType = <TargetProps extends object>(
  TargetComponent: ComponentType<TargetProps>,
  hover_menu_props: HoverMenuProps
) => FC<HoverMenuProps & TargetProps>;

export const WithHoverMenu: WithHoverMenuType = (
  TargetComponent,
  hover_menu_props: HoverMenuProps
) => {
  return (props) => {
    const [hovered, set_hovered] = useState(false);
    return (
      <div>
        <TargetComponent {...props} />
        {props.hovered ? <HoverMenu /> : null}
      </div>
    );
  };
};

/*
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
*/
