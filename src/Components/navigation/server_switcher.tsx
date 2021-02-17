import React, { FC } from "react";
import { server } from "../../interfaces/interface_barrell";
import "../../styles/components/server_switcher/server_switcher.css";

export interface ServerSwitcherProps {
  servers: Array<server.Server>;
}

export const ServerSwitcher: FC<ServerSwitcherProps> = ({ servers }) => {
  return (
    <summary>
      {servers.map((s) => (
        <span>
          <p>
            {s.name} | {s.region}
          </p>
        </span>
      ))}
    </summary>
  );
};
