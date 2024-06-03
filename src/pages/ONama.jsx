import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="O nama">
      <CommonSection title="O nama" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Mi smo tu da Vaša vožnja bude bezbedna
                </h2>

                <p className="section__description">
                Iznajmljivanje vozila u  Rent a Car agenciji je brzo, jednostavno i po najvišim svetskim car rental standardima. Ukoliko Vam je potrebno vozilo prilikom dolaska u Beograd (Srbija), tu smo za Vas! Kod nas možete da iznajmite vozilo prema Vašim potrebama, kako na aerodromu Nikola Tesla u Beogradu, tako i na bilo kojoj drugoj lokaciji kao i širom Srbije. Kao beogradska rent a car agencija, uživamo veliki ugled kod svojih klijenata. Ljubazno i stručno osoblje izlazi u susret svim Vašim zahtevima za rent a car usluge u Beogradu.
                </p>

                <p className="section__description">
                Za duži najam vozila nudimo posebne pogodnosti. Izdavanje, preuzimanje i rentiranje vozila  bez ikakvih skrivenih troškova. Mi cenimo Vaše vreme. Iznajmite vozilo u agenciji  I UVERITE SE!.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Treba Vam pomoć?</h6>
                    <h4>+381 65 555 666</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Eksperti</h6>
              <h2 className="section__title">Ovo su naši članovi</h2>
            </Col>
            { <OurMembers /> }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
