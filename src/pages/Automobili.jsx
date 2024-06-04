import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [sortedCars, setSortedCars] = useState([...carData]);

  useEffect(() => {
    let sortedArray = [...carData];

    if (sortOrder === "low") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      sortedArray.sort((a, b) => b.price - a.price);
    }

    setSortedCars(sortedArray);
  }, [sortOrder]);

  return (
    <Helmet title="Automobili">
      <CommonSection title="Automobili" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sortiraj
                </span>

                <select onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="">Select</option>
                  <option value="low">Cena rastuće</option>
                  <option value="high">Cena opadajuće</option>
                </select>
              </div>
            </Col>

            {sortedCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
