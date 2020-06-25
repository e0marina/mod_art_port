//this is the 'smart' component that passes down functionality to it's children

//To Do:
//function that when image is clicked on, launches modal with larger image and info on the image

import React, { Component } from "react";
import MainGrid from "../MainGrid/mainGrid";
import paintings from "../../paintings.json";

class MainContainer extends Component {
  state = {
    paintings,
  };

  render() {
    return <MainGrid paintings={this.state.paintings} />;
  }
}

export default MainContainer;
