import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "26c6bb9b2199470ba21fa7a7761fe714";
      const city = "Belgrade";
      const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&lang=sr`;

      try {
        const response = await axios.get(url);
        console.log(response.data); // Provera strukture podataka
        setWeather(response.data.data[0]);
      } catch (error) {
        setError("Greška pri preuzimanju vremenskih podataka");
      }
    };

    fetchWeather();

    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB8tkIJw6NULj3KYNAofe44qJVfvpqOkFE&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.body.appendChild(script);
    };

    const initMap = () => {
      const agencyLocation = { lat: 44.796953, lng: 20.476501 }; // Koordinate za Beograd
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: agencyLocation,
      });
      new window.google.maps.Marker({
        position: agencyLocation,
        map: map,
      });
    };

    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initMap();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsFormSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsFormSubmitted(false);
      }, 1000);
    }, 0);
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

                <h6 className="fw-bold mt-4">Vremenska prognoza</h6>
                {error ? (
                  <p>{error}</p>
                ) : weather ? (
                  <div>
                    <p>{weather.city_name}</p>
                    <p>{weather.temp}°C</p>
                  </div>
                ) : (
                  <p>Učitavanje vremenskih podataka...</p>
                )}

                {/* Dodajte div za Google mapu */}
                <h6 className="fw-bold mt-4">Lokacija na Google mapi</h6>
                <div id="map" style={{ height: "400px", width: "100%" }}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
