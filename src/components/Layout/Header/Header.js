import logo from "../../../assets/logo.png";
import mlResume from "../../../assets/Bhaven_Naik_Resume_ML.pdf";
import softwareResume from "../../../assets/Bhaven_Naik_Resume_Software.pdf";
import {
  Container,
  Nav,
  Navbar,
  Form,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

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
          <Form>
            <DropdownButton
              variant="outline-success"
              title="Resume"
              id="nested-resume"
              align={{ lg: "end" }}
            >
              <Dropdown.Item
                href={softwareResume}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline-success"
                eventKey="1"
              >
                Full Stack Developer
              </Dropdown.Item>
              <Dropdown.Item
                href={mlResume}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline-success"
                eventKey="2"
              >
                Machine Learning Engineer
              </Dropdown.Item>
            </DropdownButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
