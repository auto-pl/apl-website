import React, { FC } from "react";
import { server } from "../../interfaces/interface_barrell";

export interface ServerSwitcherProps {
  servers: Array<server.Server>;
}

export const ServerSwitcher: FC<ServerSwitcherProps> = (props) => {
  return (
    <div>
      <span></span>
    </div>
  );
};
