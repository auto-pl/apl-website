// this file will have the hover menu for hexes
import React, { FC, ComponentType } from "react";

type WrappedComponent = ComponentType<{ key: string }>;

interface HoverMenuProps {
  /**
   * The name of the menu to be placed at the top
   */
  title: string;
  /**
   * What should be displayed in the body.
   */
  body_items: Array<WrappedComponent>;

  options?: {
    /**
     * Whether the menu should appear in a set spot.
     * Should be one of [bottom right, bottom left, top right, top left]
     */
    fixed_position?: string;
  };
}

export const HoverMenu: FC<HoverMenuProps> = (props: HoverMenuProps) => {
  return (
    <div>
      <span>{props.title}</span>
      {props.body_items.map((e, i) => (
        <div key={i}>{<WrappedComponent key={i} />}</div>
      ))}
    </div>
  );
};
