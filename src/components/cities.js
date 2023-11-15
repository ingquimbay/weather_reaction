import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CityCard from "./cityCard";

const Cities = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CityCard />
        </Col>
        <Col>
          <CityCard />
        </Col>
        <Col>
          <CityCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <CityCard />
        </Col>
        <Col>
          <CityCard />
        </Col>
        <Col>
          <CityCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Cities;
