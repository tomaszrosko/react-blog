import {Dropdown} from "react-bootstrap";
import './Header.scss';
import {NavLink} from "react-router-dom";
import LogoBlack from "../../assets/img/svg/logo-black.svg";
import Phone from "../../assets/img/svg/phone.svg";
import Message from "../../assets/img/svg/message.svg";


function DropdownNav() {
  return (
    <>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink exact='true' to="/"  activeClassName="active">
                Home
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/allEntries"  activeClassName="active">
                Wpisy
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/contact" activeClassName="active">
                Kontakt
              </NavLink>
            </Dropdown.Item>
            <div className={"dropdown-footer"}>
              <a href="/" className="link-footer"><img src={LogoBlack} className={"ic-logo-black"} width={24} height={15} alt="Logo" /><p>okśoR aneladgaM</p></a>
              <a href="tel:48667264375" className="link-footer"><img src={Phone} className={"ic-phone"} width={24} height={24} alt="Phone" /><p>573 462 766 84+</p></a>
              <a href="mailto:magdalena.chuchmacz@wp.pl" className="link-footer"><img src={Message} className={"ic-message"} width={24} height={24} alt="Message" /><p>lp.pw@zcamhcuhc.aneladgam</p></a>
            </div>
          </Dropdown.Menu>
        </Dropdown>
    </>
  )
}

export default DropdownNav
