// this file will have the hover menu for hexes
import React, { FC, ReactNode, CSSProperties } from "react";

type position = "bottom right" | "bottom left" | "top right" | "top left";

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
    fixed_position?: position;
  };
}

const get_position_style = (
  options: HoverMenuProps["options"]
): CSSProperties => {
  const default_style: CSSProperties = {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  };
  if (!options) return default_style;

  const dimensions = { height: window.outerHeight, width: window.outerWidth };
  // get 90% of the dimension
  const reduce_dimension = (n: number): number => n - 0.1 * n;
  switch (options.fixed_position) {
    case undefined:
      return default_style;

    case "bottom right":
      return {
        top: reduce_dimension(dimensions.height),
        left: reduce_dimension(dimensions.width),
      };

    case "top right":
      return {
        bottom: reduce_dimension(dimensions.height),
        left: reduce_dimension(dimensions.width),
      };

    case "bottom left":
      return {
        top: reduce_dimension(dimensions.height),
        right: reduce_dimension(dimensions.width),
      };

    case "top left":
      return {
        bottom: reduce_dimension(dimensions.height),
        right: reduce_dimension(dimensions.width),
      };

    default:
      return default_style;
  }
};

export const HoverMenu: FC<HoverMenuProps> = (props: HoverMenuProps) => {
  return (
    <div style={get_position_style(props.options)}>
      <span>
        <b>{props.title}</b>
      </span>
      <div>{props.body_items}</div>
    </div>
  );
};
