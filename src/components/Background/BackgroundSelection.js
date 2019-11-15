import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";

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

class BackgroundSelection extends Component {
  state = { openColor: true };

  setBackground = newBackground => {
    this.props.handleBackgroundChange(newBackground);
  };

  toggleSelectionGroup = btn => {
    btn == "color"
      ? this.setState({ openColor: true })
      : this.setState({ openColor: false });
  };

  render() {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <ButtonGroup>
          <Button onClick={() => this.toggleSelectionGroup("color")}>
            Color
          </Button>
          <Button onClick={() => this.toggleSelectionGroup("image")}>
            Image
          </Button>
        </ButtonGroup>
        {this.state.openColor
          ? backgrounds.Colors.map(color => (
              <ColorSelection button key={color} bg={color}>
                <ListItemText>{color}</ListItemText>
              </ColorSelection>
            ))
          : backgrounds.Images.map(image => {
              console.log(image);
              return (
                <ImageSelection button key={image} bg={image}></ImageSelection>
              );
            })}
        <Divider style={{ margin: 30 }} />
      </div>
    );
  }
}

export default BackgroundSelection;
