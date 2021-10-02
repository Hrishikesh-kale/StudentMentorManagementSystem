import React, { Component } from "react";
import FAQService from "../Services/FAQService";
import Header from "./HeaderComponent";
import { Button, Card, Accordion } from "react-bootstrap";

export default class FAQComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queries: [],
    };
  }

  componentDidMount() {
    FAQService.getAllQueris().then((response) => {
      this.setState({ queries: response.data });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="greetingsProfileCard">
          <center className="greetingsProfileInfo">
            <p style={{ fontSize: "20px" }}>Frequently Asked Questions</p>
          </center>
        </div>
        {this.state.queries.map((query) => (
          <Accordion className="FaqAccordion">
            <Card>
              <Card.Header className="FaQuestions bg-secondary">
                <Accordion.Toggle as={Button} variant="text" eventKey="0">
                  {query.question}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{query.answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </div>
    );
  }
}
