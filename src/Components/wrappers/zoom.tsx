import React, { FC, ReactNode } from "react";
import { ZoomHandler } from "../menus/zoom_controls";

export interface ZoomProps {
  /**
   * These will be wrapped in a div whose dimensions and offsets are changed.
   */
  children: ReactNode;
}

const zoom_in: ZoomHandler = (zoom_level) => {};
//
