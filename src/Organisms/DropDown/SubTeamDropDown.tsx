import { MenuItem } from "@mui/material";
import { FC } from "react";
// import React from "react";

const SubTeamDropDown: FC<any> = ({ handleDelete }) => {
  return (
    <>
      <MenuItem
        onClick={handleDelete}
        sx={{
          fontSize: "14px",
          textAlign: "center",
          justifyContent: "center", // Ensures the text is fully centered
        }}
      >
        Delete
      </MenuItem>
    </>
  );
};

export default SubTeamDropDown;
