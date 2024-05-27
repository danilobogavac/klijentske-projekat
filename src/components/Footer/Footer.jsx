import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
    {
      path: "/onama",
      display: "O nama",
    },
  
    {
      path: "/automobili",
      display: "Automobili",
    },
    {
      path: "/blogovi",
      display: "Blogovi",
    },
  
    {
      path: "/kontakt",
      display: "Kontakt",
    },
  ];

const Footer = () => {
    const date = new Date();
  const year = date.getFullYear();
    return ( 
        <footer className="footer">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className="logo footer__logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-xrp-line"></i>
                    <span>
                      Rent a Car <br /> Servis
                    </span>
                  </Link>
                </h1>
              </div>
              <p className="footer__logo-content">
              Rent a Car Servis je kompanija sa dugom tradicijom koja datira čak od 2024. godine, kada je kompanija otpočela svoj biznis sa samo jednim automobilom u Beogradu.
              Kompanija sada ima više od 50 vozila u svom voznom parku i više od 100 kooperantskih vozila u čitavom regionu.
              </p>
            </Col>
  
            <Col lg="2" md="4" sm="6">
              <div className="mb-4">
                <h5 className="footer__link-title">Naše stranice</h5>
                <ListGroup>
                  {quickLinks.map((item, index) => (
                    <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </Col>
  
            <Col lg="3" md="4" sm="6">
              <div className="mb-4">
                <h5 className="footer__link-title mb-4">Predstavništvo</h5>
                <p className="office__info">Maksima Gorkog 7, Beograd, Srbija</p>
                <p className="office__info">Telefon: +381 65 555 666</p>
  
                <p className="office__info">Email: rentacarservisbg@gmail.com</p>
  
                <p className="office__info">Radno vreme: 9:00 - 17:00</p>
              </div>
            </Col>
  
            <Col lg="3" md="4" sm="12">
              <div className="mb-4">
                <h5 className="footer__link-title">Newsletter</h5>
                <p className="section__description">Prijavite se na naš newsletter</p>
                <div className="newsletter">
                  <input type="email" placeholder="Email" />
                  <span>
                    <i class="ri-send-plane-line"></i>
                  </span>
                </div>
              </div>
            </Col>
  
            <Col lg="12">
              <div className="footer__bottom">
                <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                  <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                 DAF Team.  Sva prava su zadržana.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
     );
}
 
export default Footer;