import React from "react";
import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./mainGrid.css";
import paintings from "../../paintings.json";
import ModalImage from "react-modal-image";

const MainGrid = () => {
  //const [topic, setTopic] = useState(null);

  const { topicPath } = useParams();
  // console.log(topicPath);
  //console.log(paintings);

  let filterPaintings;
  //console.log(topicPath);

  if (topicPath) {
    filterPaintings = paintings.filter((p) => p.category === topicPath);
    //console.log(filterPaintings);
  } else {
    filterPaintings = paintings;
  }

  //if the modal is open, match the image to the one that was clicked

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
            alt="Hello World!"
          />
        ))}
      </Masonry>
    </div>
  );
};
export default MainGrid;
