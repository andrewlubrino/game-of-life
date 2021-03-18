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
        <NavbarBrand href="/">Andrew Lubrino</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav>
              <NavItem>
                <NavLink href="https://github.com/andrewlubrino">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resume">Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
  );
}