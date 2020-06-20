import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import KeanuCard from "../KeanuCard/index.js";
import keanuPics from "../../keanus.json";
import "./mainGrid.css";

class MainGrid extends Component {
  state = {
    keanuPics,
  };

  render() {
    return (
      <div id="container">
        <StackGrid columnWidth={300} gutterWidth={3}>
          {this.state.keanuPics.map((keanu) => (
            <KeanuCard
              key={keanu.id}
              className="keanu-card"
              id={keanu.id}
              name={keanu.name}
              image={keanu.image}
            />
          ))}
        </StackGrid>
      </div>
    );
  }
}
export default MainGrid;
