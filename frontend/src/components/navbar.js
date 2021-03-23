import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar className="mb-3" color="light" light expand="md">
        <NavbarBrand href="/">Game of Life</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav>
              <NavItem>
                <NavLink href="https://github.com/andrewlubrino/game-of-life">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
  );
}