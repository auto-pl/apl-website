import React, { ComponentType, useState, FC } from "react";
import { HoverMenu } from "../menus/hover_menu";
import { BaseState } from "../../interfaces/continent";
import { PopulationReport } from "../visualisation/populations";

export interface withBaseHoverMenuProps {
  base_state: BaseState;
}

/**
 * Add a `HoverMenu` to the component. The menu will contain information about a base
 * @param TargetComponent The component to add the `HoverMenu` to
 */
export function withBaseHoverMenu<TargetProps extends withBaseHoverMenuProps>(
  TargetComponent: ComponentType<TargetProps>
): FC<TargetProps & withBaseHoverMenuProps> {
  const ComponentWithBaseHoverMenu = (props: TargetProps) => {
    const [hovered, set_hovered] = useState(false);
    return (
      <div
        onMouseEnter={() => set_hovered(true)}
        onMouseLeave={() => set_hovered(false)}
      >
        <TargetComponent {...props} />
        {hovered ? (
          <HoverMenu
            title={props.base_state.name}
            body_items={[
              <PopulationReport populations={props.base_state.population} />,
            ]}
            options={{
              fixed_position: "bottom right",
              width: "15.5%",
              height: "45%",
            }}
          />
        ) : null}
      </div>
    );
  };

  return ComponentWithBaseHoverMenu;
}
