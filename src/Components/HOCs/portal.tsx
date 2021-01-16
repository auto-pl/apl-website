import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: ReactNode;
}

// Credit: https://blog.logrocket.com/learn-react-portals-by-example/
export const Portal = ({ children }: PortalProps) => {
  const mount = document.getElementById("portals");
  const element = document.createElement("div");
  if (!mount)
    throw new Error(
      "Could not mount Portal. Check app.tsx for a div with id=portals"
    );

  useEffect(() => {
    mount.appendChild(element);
    return () => {
      mount.removeChild(element);
    };
  }, [element, mount]);

  return createPortal(children, element);
};
