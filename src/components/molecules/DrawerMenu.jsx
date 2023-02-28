import React from "react";
import Drawer from "@mui/material/Drawer";

export default function DrawerMenu(props) {
  const anchor = "right";

  return (
    <Drawer
      anchor={anchor}
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      Menu
    </Drawer>
  );
}
