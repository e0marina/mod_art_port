import React from "react";
import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./mainGrid.css";
import paintings from "../../paintings.json";
import ModalImage from "react-modal-image";

const MainGrid = () => {
  const { topicPath } = useParams();

  let filterPaintings;

  if (topicPath) {
    filterPaintings = paintings.filter((p) => p.category === topicPath);
  } else {
    filterPaintings = paintings;
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    800: 2,
    500: 1,
  };

  return (
    <div id="container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filterPaintings.map((painting) => (
          <ModalImage
            small={painting.image}
            large={painting.larger}
            alt={painting.description}
          />
        ))}
      </Masonry>
    </div>
  );
};
export default MainGrid;
