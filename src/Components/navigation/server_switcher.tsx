import React, { FC } from "react";
import { server } from "../../interfaces/interface_barrell";
import { Switcher } from "./switcher/switcher";
import "../../styles/components/server_switcher/server_switcher.css";

export interface ServerSwitcherProps {
  servers: server.Servers;
}

export const ServerSwitcher: FC<ServerSwitcherProps> = ({ servers }) => {
  const items = servers.map((s) => ({
    text: s.name,
    body: (
      <span>
        <p className="item-text">
          {s.name} | {s.region}
        </p>
      </span>
    ),
  }));
  return <Switcher items={items} style={{ minWidth: "200px" }} />;
};
