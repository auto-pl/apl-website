import React, { ComponentType, FC, useEffect } from "react";

export interface WithClickOutsideDetectionProps {}

/**
 * Attaches a listener to the component to check for clicks within and without the component.
 * The component must have a container that has an id. That id should be passed as `container_id`
 * @param TargetComponent The component to wrap
 * @param container_id The id of the container of your component.
 * @param on_click_out The function to call when a click is out of the container.
 * @param on_click_in The function to call when a click is in the container.
 * @returns The wrapped component and the detach callback function.
 */
export function withClickOutsideDetection<TargetProps extends {}>(
  TargetComponent: ComponentType<TargetProps>,
  container_id: string,
  on_click_out = () => {},
  on_click_in = () => {}
): [FC<TargetProps>, () => void] {
  const listener = (e: MouseEvent) => {
    if (!e.target) return;
    const target = e.target as HTMLElement;
    if (target.closest(`#${container_id}`)) on_click_out();
    else on_click_in();
  };
  const detach_listener = () => document.removeEventListener("click", listener);

  return [
    (props) => {
      // attach the listener after the component mounts
      useEffect(() => {
        document.addEventListener("click", listener);
        return detach_listener; // prevent memory leak
      });
      return <TargetComponent {...(props as TargetProps)} />;
    },
    detach_listener,
  ];
}
