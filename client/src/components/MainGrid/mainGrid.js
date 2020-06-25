import React, { useState } from "react";
import StackGrid from "react-stack-grid";
import PaintingCard from "../PaintingCard/index.js";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./mainGrid.css";

const MainGrid = ({ paintings }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div id="container">
      <StackGrid columnWidth={400} gutterWidth={3}>
        {paintings.map((painting) => (
          <a role="button" href="#" onClick={toggle}>
            <PaintingCard
              key={painting.id}
              className="painting-card"
              id={painting.id}
              name={painting.name}
              image={painting.image}
            />
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </a>
        ))}
      </StackGrid>
    </div>
  );
};
export default MainGrid;
