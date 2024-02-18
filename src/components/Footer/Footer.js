import './Footer.scss'

import Container from 'react-bootstrap/Container';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className={"copyright text-center"}>
         <Col className={"col-12"}>
           Copyright © 2024 Tomasz Rośko
         </Col>
        </Row>
      </Container>
    </footer>
  );
}


export default Footer;

