import './Header.scss'
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import DropDownNav from './Dropdown';
import Logo from "../../assets/img/svg/logo.svg";


function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col className={"c-nav"}>
            <div className={"c-nav__box-left"}>
              <Link to="/"><img src={Logo} className={"ic-logo"} width={24} height={15} alt="Logo"/></Link>
            </div>
            <div className="c-nav__burger d-sm-none">
              <DropDownNav/>
            </div>
            <div className={"c-navbar d-none d-sm-flex"}>
              <div id={"nav-collapse"}>
                <ul className={"c-navbar__nav"}>
                  <li className={"c-navbar__nav-item"}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={"c-navbar__nav-item"}>
                    <Link to="/allEntries">Wpisy</Link>
                  </li>
                  <li className={"c-navbar__nav-item c-navbar__nav-contact"}>
                    <Link to="/contact">Kontakt</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}


export default Header;
