import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ContactModal from "../ContactModal/contactModal";
import "./navbar.css";

const Navigation = () => {
  //handles responsive nav hamburger
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Emily Marinaro</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <div className="nav-items">
              <NavItem>
                <NavLink className="people" href="#">
                  People
                </NavLink>
              </NavItem>
              <NavItem className="animals">
                <NavLink href="#">Animals</NavLink>
              </NavItem>

              <ContactModal />
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
