// this file will have the hover menu for hexes
import React, { FC, ReactNode } from "react";

interface HoverMenuProps {
  /**
   * The name of the menu to be placed at the top
   */
  title: string;
  /**
   * What should be displayed in the body.
   */
  body_items: Array<ReactNode>;

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
      <div>{props.body_items}</div>
    </div>
  );
};
