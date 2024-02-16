import './Entries.scss';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Ratio, Row} from "react-bootstrap";
// import Json from '../../assets/data/pl/entries.json';
import Articles from '../AllEntries/DataEntries' ;
import {Link} from "react-router-dom";
import RightArrow from '../../assets/img/svg/right-arrow.svg';
import ArrowWhite from '../../assets/img/svg/right-arrow-white.svg';

const lastEntries = Articles.slice(-4);
const arrEntries = lastEntries.reverse();


function SectionEntries() {
  return (
    <section className={"c-entries"}>
      <Container fluid>
        <Container>
          <Row>
         {
            arrEntries.map(entry => {
                let ratioEntry = (entry.heightMin / entry.widthMin * 100);
              const path = `/entry/${entry.id}`;
                return (
                  <Col className={"position-relative"} key={`entry-${entry.id}`} xs={12} md={6}>
                    <Link to={path}>
                      <Ratio aspectRatio={ratioEntry}>
                        <Card.Img variant="top" width={entry.widthMin} height={entry.heightMin} src={entry.imageMin} alt={entry.title}
                                  loading="lazy"/>
                      </Ratio>
                    </Link>
                    <ul className={"flag list-unstyled"}>
                      <li className={entry.flagColor}>{entry.title}</li>
                      <li className={"flag-watermark"}>{entry.flagWatermark}</li>
                    </ul>
                  </Col>
                )
            })
          }
          </Row>
          <Row className={"justify-content-end"}>
            <Col xs={12} md={6} lg={3} className={"d-flex align-items-center justify-content-end"}>
              <Link className={"btn-more btn-border"} to="/allEntries">POKAŻ WSZYSTKIE
                <img src={RightArrow} className={"ic-right-arrow"} width={15} height={8} alt="Logo"/>
                <img src={ArrowWhite} className={"ic-right-arrow-white"} width={15} height={8} alt="Logo"/>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default SectionEntries;
