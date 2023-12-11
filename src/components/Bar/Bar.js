import './Bar.scss'
import {Col, Row} from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";

function Bar() {
  return (
    <section className={"c-bar"}>
      <Container>
        <Row>
          <Col xs={12} className={'c-bar__box'}>
            <h2>Wszystkie wpisy</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Bar;
