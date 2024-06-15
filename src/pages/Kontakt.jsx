import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-x-line",
  },
];

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulacija slanja podataka (možete dodati logiku za slanje podataka putem API-ja)
    setTimeout(() => {
      setIsFormSubmitted(true);
      // Resetovanje polja za unos nakon 3 sekunde
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsFormSubmitted(false);
      }, 1000); // 3000ms = 3 sekunde
    }, 0); // 1000ms = 1 sekunda
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Helmet title="Kontakt">
      <CommonSection title="Kontakt" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Povežite se sa nama!</h6>

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Vaše ime"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Poruka"
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Pošaljite poruku
                </button>
              </Form>
              {isFormSubmitted && (
                <div className="popup">
                  <p>Poruka je uspešno poslata!</p>
                </div>
              )}
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Informacije za kontakt</h6>
                <p className="section__description mb-0">
                  Maksima Gorkog 7, Beograd, Srbija
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Telefon: </h6>
                  <p className="section__description mb-0">+381 65 555 666</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email: </h6>
                  <p className="section__description mb-0">
                    rentacarservisbg@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Zapratite nas</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
