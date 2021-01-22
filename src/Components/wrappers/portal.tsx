import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: ReactNode;
}

// Credit: https://blog.logrocket.com/learn-react-portals-by-example/
export const Portal = ({ children }: PortalProps) => {
  let mount = document.getElementById("portals");
  const element = document.createElement("div");

  if (!mount) mount = repair_dom();

  useEffect(() => {
    (mount as HTMLElement).appendChild(element);

    return () => {
      (mount as HTMLElement).removeChild(element);
    };
  }, [element, mount]);

  return createPortal(children, element);
};

/**
 * Create the portals div if it failed to create
 * @param mount The
 */
function repair_dom(): HTMLDivElement {
  const body = document.getElementsByTagName("body")[0];
  const new_mount = document.createElement("div");
  new_mount.id = "portals";
  body.appendChild(new_mount);
  return new_mount;
}
