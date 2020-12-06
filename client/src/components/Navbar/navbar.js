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
    <div id="nav-styling">
      <Navbar light expand="md">
        <NavbarBrand href="/">EMILY MARINARO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <div className="nav-items">
              <NavItem>
                <NavLink className="people" href="/people">
                  PEOPLE
                </NavLink>
              </NavItem>
              <NavItem className="animals">
                <NavLink href="/animal">ANIMALS</NavLink>
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
