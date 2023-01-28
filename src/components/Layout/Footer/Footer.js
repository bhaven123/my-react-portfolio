import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Nav, Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-between align-items-center py-3 my-4 border-top">
        <span className="text-muted">&copy; 2023 Created by Bhaven Naik</span>
        <Nav className="col-md-4 justify-content-end">
          <Nav.Item>
            <Nav.Link
              href="https://www.linkedin.com/in/bhaven-naik/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://github.com/bhaven123"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://twitter.com/bhavennaik"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faTwitter} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://www.facebook.com/bhaven.naik.1/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
