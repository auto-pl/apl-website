import React, { FC, FormEvent } from "react";
import "../../styles/global/ps2_styles/menus.css";
import "../../styles/global/ps2_styles/text.css";

export interface DropdownItemProps {
  value: any;
  label: string;
}

/**
 * See https://www.w3schools.com/tags/tag_select.asp
 */
export interface DropdownMenuProps {
  label?: string;
  on_change?: (value: any) => void;
  items: Array<DropdownItemProps>;
  deactivated?: boolean;
  multiple?: boolean;
  autofocus?: boolean;
  size?: number;
}

const DropdownItem: FC<DropdownItemProps> = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};

export const PS2DropdownMenu: FC<DropdownMenuProps> = ({
  label,
  on_change,
  items,
  deactivated,
  multiple,
  autofocus,
  size,
}) => {
  const handle_change = on_change
    ? (event: FormEvent<HTMLSelectElement>) =>
        on_change(event.currentTarget.value)
    : () => {};
  return (
    <>
      <label htmlFor={label} className="font-primary">
        {label}
      </label>
      <select
        name={label}
        id={label}
        className="styleSelect"
        disabled={deactivated}
        onChange={handle_change}
        multiple={multiple}
        autoFocus={autofocus}
        size={size}
      >
        {items.map((item, index) => (
          <DropdownItem {...item} key={index} />
        ))}
      </select>
    </>
  );
};
