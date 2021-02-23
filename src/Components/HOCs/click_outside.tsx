import React, { ComponentType, FC, useEffect } from "react";
import { WrappedProps } from "../../interfaces/HOCs";

export interface WithClickOutsideDetectionProps {
  /**
   * The id of the element to track clicks outside of.
   */
  id_of_element: string;
  /**
   * This will be called when a user clicks out of the component
   */
  on_click_out?: () => void;
  /**
   * This will be called when a user clicks into the component
   */
  on_click_in?: () => void;
}

/**
 *
 * @param TargetComponent The component to wrap
 * @returns The wrapped component. It will take 2 additional props:
 *     - `on_click_out?: () => void`:
 */
export function withClickOutsideDetection<TargetProps extends {}>(
  TargetComponent: ComponentType<TargetProps>
): FC<WrappedProps<TargetProps, WithClickOutsideDetectionProps>> {
  return ({
    id_of_element,
    on_click_out = () => {},
    on_click_in = () => {},
    ...props
  }) => {
    useEffect(() => {
      document.addEventListener("click", (e: MouseEvent) => {
        if ((e.target as HTMLElement)?.id !== id_of_element) on_click_out();
        else on_click_in();
      });
    });
    return <TargetComponent {...(props as TargetProps)} />;
  };
}
