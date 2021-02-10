import React, { FC, MouseEventHandler, useReducer } from "react";
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

enum ButtonEvent {
  ZOOM_IN,
  ZOOM_OUT,
  RESET,
}

// !FIX: listeners are called twice
const get_reducer = (listeners: {
  zoom_in: ZoomListener;
  zoom_out: ZoomListener;
  reset: ZoomListener;
}) => {
  const reducer = (zoom_level: number, action_type: ButtonEvent) => {
    let new_level: number;

    switch (action_type) {
      case ButtonEvent.ZOOM_IN:
        new_level = zoom_level + 1;
        listeners.zoom_in(new_level);
        break;
      case ButtonEvent.ZOOM_OUT:
        new_level = zoom_level - 1;
        listeners.zoom_out(new_level);
        break;
      case ButtonEvent.RESET:
        new_level = 0;
        listeners.reset(new_level);
        break;
      default:
        throw new Error("Invalid action type.");
    }
    return new_level;
  };
  return reducer;
};

export const ZoomControls: FC<ZoomControlsProps> = ({
  zoom_in,
  zoom_out,
  zoom_reset,
  on_zoom_in = () => {},
  on_zoom_out = () => {},
  on_zoom_reset = () => {},
}) => {
  const [zoom_level, dispatch] = useReducer(
    get_reducer({
      zoom_in: on_zoom_in,
      zoom_out: on_zoom_out,
      reset: on_zoom_reset,
    }),
    0
  );
  const buttons_contents: Array<[string, MouseEventHandler, ButtonEvent]> = [
    ["+", zoom_in, ButtonEvent.ZOOM_IN],
    ["-", zoom_out, ButtonEvent.ZOOM_OUT],
    ["x", zoom_reset, ButtonEvent.RESET],
  ];
  return (
    <Portal>
      <div className="zoom-container">
        {buttons_contents.map(([text, handler, action_type], i) => (
          <button
            key={i}
            className="font-primary zoom-button"
            onClick={(e) => {
              handler(e);
              dispatch(action_type);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </Portal>
  );
};
