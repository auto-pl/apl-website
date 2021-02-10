import React, { FC, MouseEventHandler } from "react";
import { Portal } from "../wrappers/portal";
import "../../styles/global/ps2_styles/text.css";
import "../../styles/zoom_controls/zoom_controls.css";

type ZoomListener = (zoom_level: number) => void;

export interface ZoomControlsProps {
  zoom_in: MouseEventHandler;
  on_zoom_in?: ZoomListener;
  zoom_out: MouseEventHandler;
  on_zoom_out?: ZoomListener;
  zoom_reset: MouseEventHandler;
  on_zoom_reset?: ZoomListener;
}

export const ZoomControls: FC<ZoomControlsProps> = ({
  zoom_in,
  zoom_out,
  zoom_reset,
}) => {
  return (
    <Portal>
      <div className="zoom-container">
        <button className="zoom-button font-primary" onClick={zoom_in}>
          +
        </button>
        <button className="zoom-button font-primary" onClick={zoom_out}>
          -
        </button>
        <button className="zoom-button font-primary" onClick={zoom_reset}>
          x
        </button>
      </div>
    </Portal>
  );
};
