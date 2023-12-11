import './FirstSlide.scss'
import Main from '../../assets/img/main.jpg'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function Index() {
  return (
   <section className={"c-first-slide"}>
     <Container fluid>
       <Row>
         <Col xs={12} className={"px-0"}>
           <div className="c-first-slide__title">
             <h1>Przygody, o których nie marzyliśmy</h1>
           </div>
           <div className="c-first-slide__photo">
             <Card.Img variant="top" src={Main} loading="lazy" alt={"Przygody o których nie marzyliśmy"}/>
           </div>
         </Col>
       </Row>
     </Container>
     <Container>
       <Row>
         <Col>
           <p>
             Kiedyś napisałam tekst, który następnie kupił i opublikował pewien rozpoznawalny portal. Tekstowi nadałam tytuł, cytując z pewnego przemówienia:
             <i>“Przygody, o których nie marzyliśmy”.</i> Opisałam wtedy kilka wspomnień, które postrzegane jako z pozoru nieznaczące, sporo w moim życiu zmieniły.
             Właśnie tak wziął początek mój blog. Doświadczając wyjątkowości z pozoru banalnych chwil, zapraszam Cię na poszukiwanie inspiracji do otwartości,
             pozwalającej przeżyć przygody, o których nawet nie marzyliśmy:)
           </p>
         </Col>

       </Row>
     </Container>
   </section>
  );
}

export default Index;
