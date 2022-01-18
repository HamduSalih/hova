import React from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import styles from "../../styles/Navigation/Navbar.module.css";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          sticky="top"
          expand="sm"
          className={styles.navbarContainer}
        >
          <Container>
            <Navbar.Brand
              href="#home"
              style={{ color: "#fff" }}
              className={styles.brand}
            >
              Hova App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className={styles.navbarLinksContainer}
            >
              <Nav className={styles.navbarLinks}>
                <Nav.Link href="#knowmore" style={{ color: "#fff" }}>
                  KNOW MORE
                </Nav.Link>
                <Nav.Link href="#contact" style={{ color: "#fff" }}>
                  CONTACT US
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
