import logo from "../../../assets/logo.png";
import resume from "../../../assets/Bhaven_Naik_Resume.pdf";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="sticky"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Personal Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              {" "}
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#work">Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form className="">
            <Button
              href={resume}
              target="_blank"
              rel="noreferrer noopener"
              variant="outline-success"
            >
              Resume
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
