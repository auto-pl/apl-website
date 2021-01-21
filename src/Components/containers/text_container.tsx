import React, { CSSProperties, FC, MouseEventHandler, ReactNode } from "react";
import "../../styles/global/ps2_styles/containers.css";
import "../../styles/global/ps2_styles/text.css";
import "../../styles/global/ps2_styles/sizing.css";

/**
 * A percentage of the screen
 */
type Height =
  | 5
  | 10
  | 15
  | 20
  | 25
  | 30
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 80
  | 85
  | 90
  | 95
  | 100
  | "auto";

/**
 * A percentage of the screen
 */
type Width = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | "auto";

/**
 * Measured in vh
 */
type FontSize = 1 | 2 | 3 | 4;

export interface TextContainerProps {
  /**
   * Defaults to 2
   */
  font_size?: FontSize;
  header_settings?: {
    /**
     * The header's contents
     */
    text: string;
    /**
     * The size of the header's font.
     * Defaults to 3.
     */
    font_size?: FontSize;
  };
  /**
   * Whether the container should be displayed inline with other elements.
   * Defaults to `false`
   */
  inline?: boolean;
  /**
   * Whether horizontal scrolling is enabled.
   * Defaults to `false`
   */
  x_scrollable?: boolean;
  /**
   * Whether vertical scrolling is enabled.
   * Defaults to `false`
   */
  y_scrollable?: boolean;
  /**
   * The width of the container in %.
   * Defaults to 20%
   */
  width?: Width;
  /**
   * The height of the container in %.
   * Defaults to 20%
   */
  height?: Height;
  on_hover?: MouseEventHandler;
  on_click?: MouseEventHandler;
  children?: ReactNode;
  style?: CSSProperties;
  class_name?: string;
  body_background_colour?: string;
}

// !FIX: not enough components! Split the header and body into components and make TextContainer just hold them

export const TextContainer: FC<TextContainerProps> = ({
  header_settings,
  inline = false,
  x_scrollable = false,
  y_scrollable = false,
  height = 20,
  width = 20,
  on_hover,
  on_click,
  font_size = 2,
  children,
  style,
  class_name,
  body_background_colour,
}) => {
  return (
    <div
      className={`container h-${height} w-${width} font-primary ${
        inline ? "container-inline" : ""
      } ${class_name}`}
      onClick={on_click}
      onMouseOver={on_hover}
      style={style}
    >
      <div className="container-glow">
        {/* The header */}
        {header_settings ? (
          <div
            className={`h-10 container-header font-size-${
              header_settings.font_size || 3
            }`}
          >
            {header_settings.text}
          </div>
        ) : null}
        {/* Scrolling support */}
        <div
          className={`w-100 h-85 ${y_scrollable ? "overflow-y-scroll" : ""} ${
            x_scrollable ? "overflow-x-scroll" : ""
          }`}
        >
          {/* The contents */}
          <div
            className={`container-body font-size${font_size}`}
            style={{ backgroundColor: body_background_colour }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
