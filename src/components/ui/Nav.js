import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Designing Glory</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Client Work" id="basic-nav-dropdown">
          <NavDropdown.Item href="#texas">Texas-Blessings</NavDropdown.Item>
          <NavDropdown.Item href="#newbreed">NewBreedRising</NavDropdown.Item>
          <NavDropdown.Item href="#graphicdesign">JGraphicDesigns</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="https://calendly.com/juliannedrager/website-app-consoltation">Sehedule Consultion</Nav.Link>
        <Nav.Link href="#testimonies">Testimonies</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};
export default Navigation;
