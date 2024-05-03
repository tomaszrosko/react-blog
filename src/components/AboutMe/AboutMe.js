import './AboutMe.scss'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import LogoBlack from "../../assets/img/svg/logo-black.svg";
import Phone from "../../assets/img/svg/phone.svg";
import Message from "../../assets/img/svg/message.svg";

const firstName = 'Magdalena';
const lastName = "Rośko";
const mobileNumber = "+48 667 264 375";
const email = 'magdalena.chuchmacz@wp.pl'

function reverseString(str) {
  return str.split("").reverse().join("");
}

const firstNameReverse = reverseString(firstName)
const lastNameReverse = reverseString(lastName)
const mobileNumberReverse = reverseString(mobileNumber)
const emailReverse = reverseString(email)

function SectionDate() {
  return (
    <section className={"section-date"}>
      <Container fluid>
        <Container>
          <Row>
            <Col md={8}>
              <div className="title" id={"about"}>O mnie</div>
              <p>
                Kobieta, żona, inżynier. Zainteresowana światem, życiem, człowiekiem, rozwojem. Skupiona na poszukiwaniu
                prawdy. Nieśmiało notuje swoje
                spostrzeżenia z obserwacji rzeczywistości, w której w danym momencie się znajduje i dróg, którymi
                aktualnie kroczy.
              </p>
              <p>
                Jeżeli któryś z moich tekstów wydaje Ci się ciekawy, chciał(a)byś mi o tym powiedzieć lub podzielić się
                wpisem na Twojej stronie
                zapraszam do kontaktu.
              </p>
            </Col>
            <Col md={4} className={"box-contact"}>
              <div className="title" id={"contact"}>Kontakt</div>
              <a href="/" className={"link-footer"}><img src={LogoBlack} className={"ic-logo-black"} width={24} height={15} alt="Logo" /><p>{firstNameReverse} {lastNameReverse}</p></a>
              <a href="tel:48667264375" className={"link-footer"}><img src={Phone} className={"ic-phone"} width={24} height={24} alt="Phone" /><p>{mobileNumberReverse}</p></a>
              <a href="mailto:magdalena.chuchmacz@wp.pl" className="link-footer"><img src={Message} className={"ic-message"} width={24} height={24} alt="Message" /><p>{emailReverse}</p></a>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default SectionDate;
