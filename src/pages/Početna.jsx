import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

const Home = () => {
    return ( 
        <Helmet title="Početna">
            <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Pronađite Vaše vozilo ovde</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                {<FindCarForm />}
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== O nama ================ */}
      <AboutSection />
      {/* ========== Naše usloge ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">VIDITE NAŠE</h6>
              <h2 className="section__title">NAJPOPULARNIJE USLUGE!</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
       {/* =========== Ponuda automobila ============= */}
       <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">UGRABITE NAŠE</h6>
              <h2 className="section__title">NAJBOLJE PONUDE</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

 {/* ===========  Klijenti =========== */}
 <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">NEKE OD PREPORUKA</h6>
              <h2 className="section__title">NAŠIH KLIJENATA</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
{/* =============== Blogovi =========== */}
<section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">PROČITAJTE NEKI OD NAŠIH</h6>
              <h2 className="section__title">NAJNOVIJIH BLOGOVA</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
        </Helmet>
     );
}
 
export default Home;