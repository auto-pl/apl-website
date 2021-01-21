import React, { FC, ReactNode, useState, MouseEventHandler } from "react";
import { Portal } from "../HOCs/portal";
import "../../styles/global/ps2_styles/text.css";
import "../../styles/zoom_controls/zoom_controls.css";

export type ZoomHandler = (zoom_level: number) => void;

export interface ZoomControlsProps {
  /**
   * Does nothing by default
   */
  on_zoom_in?: ZoomHandler;
  /**
   * Does nothing by default
   */
  on_zoom_out?: ZoomHandler;
}

export const ZoomControls: FC<ZoomControlsProps> = ({
  children,
  on_zoom_in = () => {},
  on_zoom_out = () => {},
}) => {
  const [zoom_level, set_zoom_level] = useState(0);
  const zoom_in: MouseEventHandler = (e) => {
    set_zoom_level(zoom_level + 1);
    on_zoom_in(zoom_level);
  };
  const zoom_out: MouseEventHandler = (e) => {
    set_zoom_level(zoom_level - 1);
    on_zoom_out(zoom_level);
  };

  return (
    <Portal>
      <div className="font-primary zoom-container">
        <span onClick={zoom_in}>+</span>
        <span onClick={zoom_out}>-</span>
      </div>
    </Portal>
  );
};
