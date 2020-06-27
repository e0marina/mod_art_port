import React, { useState } from "react";
import Masonry from "react-masonry-css";
import PaintingCard from "../PaintingCard/index.js";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ZoomedImages from "../ZoomedImages/zoomedImages";
import "./mainGrid.css";

const MainGrid = ({ paintings, paintingsBig }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
        {paintings.map((painting) => (
          <a role="button" href="#" onClick={toggle} key={painting.id}>
            <PaintingCard
              key={painting.id}
              className="painting-card"
              id={painting.id}
              name={painting.name}
              image={painting.image}
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
