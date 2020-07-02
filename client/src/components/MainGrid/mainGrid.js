import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Masonry from "react-masonry-css";
import PaintingCard from "../PaintingCard/index.js";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ZoomedImages from "../ZoomedImages/zoomedImages";
import "./mainGrid.css";
import paintings from "../../paintings.json";
import paintingsBig from "../../paintingsBig.json";

const MainGrid = () => {
  const [modal, setModal] = useState(false);
  const [topic, setTopic] = useState(null);

  const toggle = () => setModal(!modal);

  const { topicPath } = useParams();
  // console.log(topicPath);
  console.log(paintings);

  let filterPaintings;
  console.log(topicPath);

  if (topicPath) {
    filterPaintings = paintings.filter((p) => p.category === topicPath);
    console.log(filterPaintings);
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
          <a role="button" href="#" onClick={toggle} key={painting.id}>
            <PaintingCard
              key={painting.id}
              className="painting-card"
              id={painting.id}
              name={painting.name}
              image={painting.image}
              category={painting.category}
            />
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}></ModalHeader>
              <ModalBody>
                <ZoomedImages paintingsBig={paintingsBig} />
              </ModalBody>
            </Modal>
          </a>
        ))}
      </Masonry>
    </div>
  );
};
export default MainGrid;
