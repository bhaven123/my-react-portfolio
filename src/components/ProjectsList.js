import { Card, Accordion, ListGroup, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectsList = ({ projects }) => {
  return (
    <Container
      style={{
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 300px)",
        justifyContent: "space-around",
        rowGap: "20px",
        columnGap: "1.33%",
        color: "#ccd6f6",
      }}
    >
      {projects.map((projectItem) => {
        const { src, title, link, icon, text, tools, description } =
          projectItem;
        return (
          <Card key={title} border="light" bg="dark">
            <Card.Img variant="top" src={src} style={{ objectFit: "cover" }} />
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
                        {description[0]}
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="bg-dark"
                        style={{ color: "#ccd6f6" }}
                      >
                        {description[1]}
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="bg-dark"
                        style={{ color: "#ccd6f6" }}
                      >
                        {description[2]}
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="bg-dark"
                        style={{ color: "#ccd6f6" }}
                      >
                        {description[3]}
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default ProjectsList;
