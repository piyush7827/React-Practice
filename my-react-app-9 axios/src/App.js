import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { FaMapMarkedAlt } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [details, setDetails] = useState([]);

  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    setDetails(data.results[0]);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className="p-4 bg-primary app">
      <Row>
        <Col md={4} className="offset-ms-4 mt-4">
          <Card>
            <CardBody className="text-center">
              <img
                height="150"
                width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
              />
              <CardTitle className="text-primary">
                <h1>
                  <span className="pr-2">{details.name?.title}</span>
                  <span>{details.name?.first}</span>
                  <span>{details.name?.last}</span>
                </h1>
              </CardTitle>
              <CardText>
                <FaMapMarkedAlt />
                {details.location?.country}
                <p>{details?.phone}</p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
