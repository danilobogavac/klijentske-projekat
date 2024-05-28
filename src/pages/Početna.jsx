import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";

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
        </Helmet>
     );
}
 
export default Home;