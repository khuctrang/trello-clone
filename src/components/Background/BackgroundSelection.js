import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";

import { connect } from "react-redux";
import { editBackground } from "../../actions";

import {
  ColorSelection,
  ImageSelection,
  ButtonGroup
} from "./BackgroundSelectionStyle";

import Scene1 from "./images/scene1.jpg";
import Scene2 from "./images/scene2.jpg";
import Scene3 from "./images/scene3.jpg";
import Scene4 from "./images/scene4.jpg";
import Scene5 from "./images/scene5.jpg";
import Scene6 from "./images/scene6.jpg";
import Scene7 from "./images/scene7.jpg";
import Scene8 from "./images/scene8.jpg";
import Scene9 from "./images/scene9.jpg";
import Sunset from "./images/sunset.jpg";

let backgrounds = {
  Colors: [
    "#3D348B",
    "#7678ED",
    "#F7B801",
    "#F18701",
    "#F35B04",
    "#119DA4",
    "#19647E",
    "#48494b"
  ],
  Images: [
    Scene1,
    Scene2,
    Scene3,
    Scene4,
    Scene5,
    Scene6,
    Scene7,
    Scene8,
    Scene9,
    Sunset
  ]
};

const BackgroundSelection = ({ editBackground }) => {
  const [openColor, setOpenColor] = useState(true);

  const toggleSelectionGroup = btn => {
    btn === "color" ? setOpenColor(true) : setOpenColor(false);
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <ButtonGroup>
        <Button onClick={() => toggleSelectionGroup("color")}>Color</Button>
        <Button onClick={() => toggleSelectionGroup("image")}>Image</Button>
      </ButtonGroup>
      {openColor
        ? backgrounds.Colors.map(color => (
            <ColorSelection
              button
              key={color}
              bg={color}
              onClick={() => editBackground("color", color)}
            >
              <ListItemText>{color}</ListItemText>
            </ColorSelection>
          ))
        : backgrounds.Images.map(image => {
            console.log(image);
            return (
              <ImageSelection
                button
                key={image}
                bg={image}
                onClick={() => editBackground("image", image)}
              ></ImageSelection>
            );
          })}
      <Divider style={{ margin: 30 }} />
    </div>
  );
};

export default connect(null, { editBackground })(BackgroundSelection);
