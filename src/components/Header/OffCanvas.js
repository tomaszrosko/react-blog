import './Header.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, NavLink} from "react-router-dom";
import Burger from "../../assets/img/svg/burger-nav.svg";
import LogoNav from "../../assets/img/svg/logo-nav.svg";
import LogoBlack from "../../assets/img/svg/logo-black.svg";
import Phone from "../../assets/img/svg/phone.svg";
import Message from "../../assets/img/svg/message.svg";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const element = document.querySelector('#about');

  function scrollBottom() {
    element.scrollTop = element.scrollHeight;
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 btn-burger">
        <img src={Burger} className={"ic-burger-nav"} width={24} height={24} alt="Burger" />
      </Button>
      <Offcanvas className={'offcanvas-end offcanvas-mobile'} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={LogoNav} className={"ic-logo-nav"} width={24} height={15} alt="Logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/*<div>*/}
            {/*<ul className="list-unstyled">*/}
              {/*<li className="menuItem one">*/}
              {/*  <Link to="/" activeClassName="active" onClick={handleClose}>Home</Link>*/}
              {/*</li>*/}
              <NavLink exact='true' to="/" onClick={handleClose} activeClassName="active">
                Home
              </NavLink>
              {/*<li className="menuItem two">*/}
              {/*  <Link to="/allEntries" onClick={handleClose}></Link>*/}
              {/*</li>*/}
              <NavLink to="/allEntries" onClick={handleClose} activeClassName="active">
                Wpisy
              </NavLink>
              {/*<li className="menuItem three">*/}
                {/*<Link to="/" onClick={handleClose}>O mnie</Link>*/}
                {/*<a href={"#about"} onClick={handleClose}>O mnie</a>*/}
              {/*</li>*/}
              {/*<NavLink to="/" onClick={scrollBottom} activeClassName="active">*/}
              {/*  O mnie*/}
              {/*</NavLink>*/}
              {/*<li className="menuItem four">*/}
              {/*  <Link to="/contact" onClick={handleClose}>Kontakt</Link>*/}
              {/*</li>*/}
              <NavLink to="/contact" onClick={handleClose} activeClassName="active">
                Kontakt
              </NavLink>
            {/*</ul>*/}
          {/*</div>*/}
        </Offcanvas.Body>
        <div className={"offcanvas-footer"}>
          <a href="/" className="link-footer"><img src={LogoBlack} className={"ic-logo-black"} width={24} height={15} alt="Logo" /><p>okśoR aneladgaM</p></a>
          <a href="tel:48667264375" className="link-footer"><img src={Phone} className={"ic-phone"} width={24} height={24} alt="Phone" /><p>573 462 766 84+</p></a>
          <a href="mailto:magdalena.chuchmacz@wp.pl" className="link-footer"><img src={Message} className={"ic-message"} width={24} height={24} alt="Message" /><p>lp.pw@zcamhcuhc.aneladgam</p></a>
        </div>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
