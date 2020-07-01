//this is the 'smart' component that passes down functionality to it's children

//To Do:
//function that when image is clicked on, launches modal with larger image and info on the image

import React, { Component } from "react";
import MainGrid from "../MainGrid/mainGrid";
import paintings from "../../paintings.json";
import paintingsBig from "../../paintingsBig.json";
import PaintingCard from "../PaintingCard";

class MainContainer extends Component {
  state = {
    paintings,
    paintingsBig,
  };

  filterPaintingByCategory() {
    paintings.map((painting) => {
      console.log(painting);
      if (painting.category === "animal") {
        return (
          <PaintingCard
            key={painting.id}
            className="painting-card"
            id={painting.id}
            name={painting.name}
            image={painting.image}
          />
        );
      } else {
        console.log("not an animal");
      }
    });
  }

  render() {
    return (
      <MainGrid
        paintings={this.state.paintings}
        paintingsBig={this.state.paintingsBig}
        filterPaintingByCategory={this.filterPaintingByCategory}
      />
    );
  }
}

export default MainContainer;
