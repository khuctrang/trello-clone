import React from "react";
import { Menu } from "./BoardMenuStyle";
import { NavButton } from "../BoardNav/BoardNavStyle";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";

import BackgroundSelection from "../Background/BackgroundSelection";

const useStyles = makeStyles({
  list: {
    width: 300
  },
  fullList: {
    width: "auto"
  }
});
const BoardMenu = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      /* onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)} */
    >
      <BackgroundSelection />
    </div>
  );

  return (
    <Menu>
      <NavButton onClick={toggleDrawer("right", true)}>Background</NavButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </Menu>
  );
};

export default BoardMenu;
