import { Card, Accordion, ListGroup, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectsList = ({ projects }) => {
  return (
    <Row
      xs={1}
      xl={3}
      md={2}
      className="g-5 text-justify mx-auto"
      style={{ color: "#ccd6f6" }}
    >
      {projects.map((projectItem) => {
        const {
          src,
          title,
          link,
          icon,
          text,
          tools,
          description1,
          description2,
          description3,
        } = projectItem;
        return (
          <Col>
            <Card border="light" bg="dark" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={src} />
              <Card.Body>
                <Card.Title>
                  {title}{" "}
                  <Card.Link href={link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={icon} />
                  </Card.Link>
                </Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item
                  variant="dark"
                  className="bg-dark"
                  style={{ color: "#ccd6f6" }}
                >
                  {tools}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          {description1}
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          {description2}
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="bg-dark"
                          style={{ color: "#ccd6f6" }}
                        >
                          {description3}
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ProjectsList;
