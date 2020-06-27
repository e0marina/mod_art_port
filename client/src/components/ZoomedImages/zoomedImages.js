import React from "react";
import PaintingCard from "../PaintingCard/index.js";

const ZoomedImages = ({ paintingsBig }) => {
  return (
    <>
      {paintingsBig.map((paintingBig) => (
        <div key={paintingBig.id}>
          <PaintingCard
            key={paintingBig.id}
            className="big-painting-card"
            id={paintingBig.id}
            name={paintingBig.name}
            image={paintingBig.image}
          />
        </div>
      ))}
    </>
  );
};

export default ZoomedImages;
