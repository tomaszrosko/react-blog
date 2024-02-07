import "./Contact.scss";
import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const Email = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJJ Date
    const serviceId = 'service_n3te7ha';
    const templateId = 'template_x9d39a3';
    const publicKey = 'c9VpQvtgGoU6yj2i6';

    // New Object
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Magda',
      message: message,
    };

    //Send Email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // console.log('Email sent successfully!', response);
        alert("Email sent successfully!")
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        // console.error('Error sending email:', error);
        alert("Error sending email")
      });
  }
  return (
    <section className={"c-contact"}>
      <Container fluid>
        <Container>
          <Row className={"c-contact__box"}>
            <Col xs={12} md={8}>
              <h2>Kontakt</h2>
              <form onSubmit={handleSubmit} className='emailForms'>
                <label>
                  Twoje imię:
                  <input
                    type="text"
                    placeholder="Twoje imię"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  Twój Email:
                  <input
                    type="email"
                    placeholder="Twój adres Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  Tekst wiadomości:
                  <textarea
                    cols={40}
                    rows={12}
                    value={message}
                    placeholder="Tutaj wpisz treść"
                    onChange={(e) => setMessage(e.target.value)}>
                   </textarea>
                </label>
                <button className={"btn-send"} type="submit">Wyślij wiadomość</button>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Email;
