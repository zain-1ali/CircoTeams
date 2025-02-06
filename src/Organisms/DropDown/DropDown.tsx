// components/ReusableMenu.tsx
import React from "react";
import {
  Menu,
  //   FormControl,
  //   InputLabel,
  MenuProps as MUIMenuProps,
} from "@mui/material";

type ReusableMenuProps = MUIMenuProps & {
  label?: string; // Optional label
  open: boolean;
  children: React.ReactNode;
  id: string;
};

const DropDown: React.FC<ReusableMenuProps> = ({
  label,
  children,
  id,
  open,
  ...props
}) => {
  return (
    // <FormControl fullWidth>
    //   {label && <InputLabel>{label}</InputLabel>}
    <Menu
      {...props}
      open={open}
      id={id}
     
    >
      {children}
    </Menu>
    // </FormControl>
  );
};

export default DropDown;
