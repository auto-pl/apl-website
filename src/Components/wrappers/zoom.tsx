import React, { FC, ReactNode } from "react";
import { ZoomControls } from "../menus/zoom_controls";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export interface ZoomerProps {
  /**
   * These will be wrapped in a div whose dimensions and offsets are changed.
   */
  children: ReactNode;
}

type TransformCallback = () => {};
type TransformArgs = {
  zoomIn: TransformCallback;
  zoomOut: TransformCallback;
  resetTransform: TransformCallback;
};

// !FIX: the controls blink when dragging
export const Zoomer: FC<ZoomerProps> = ({ children }) => {
  const inner: FC<TransformArgs> = ({
    zoomIn,
    zoomOut,
    resetTransform,
  }: TransformArgs) => {
    return (
      <>
        <ZoomControls
          zoom_in={zoomIn}
          zoom_out={zoomOut}
          zoom_reset={resetTransform}
          on_zoom_in={(z) => console.log(z)}
          on_zoom_out={(z) => console.log(z)}
          on_zoom_reset={(z) => console.log(z)}
        />
        <TransformComponent>{children}</TransformComponent>
      </>
    );
  };
  return <TransformWrapper>{inner}</TransformWrapper>;
};
