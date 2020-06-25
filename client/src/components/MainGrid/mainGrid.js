import React from "react";
import StackGrid from "react-stack-grid";
import PaintingCard from "../PaintingCard/index.js";

import "./mainGrid.css";

const MainGrid = ({ paintings }) => {
  return (
    <div id="container">
      <StackGrid columnWidth={400} gutterWidth={3}>
        {paintings.map((painting) => (
          <PaintingCard
            key={painting.id}
            className="painting-card"
            id={painting.id}
            name={painting.name}
            image={painting.image}
          />
        ))}
      </StackGrid>
    </div>
  );
};
export default MainGrid;
