import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";


const CarListing = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [sortedCars, setSortedCars] = useState([...carData]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 5;

  useEffect(() => {
    let sortedArray = [...carData];

    if (sortOrder === "low") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      sortedArray.sort((a, b) => b.price - a.price);
    }

    setSortedCars(sortedArray);
  }, [sortOrder]);

  // Calculate the cars to display on the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = sortedCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(sortedCars.length / carsPerPage);

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

            {currentCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}

            <Col lg="12">
              <div className="pagination d-flex justify-content-center mt-4">
                <Button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Prethodna
                </Button>
                {[...Array(totalPages)].map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    active={currentPage === index + 1}
                  >
                    {index + 1}
                  </Button>
                ))}
                <Button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Sledeća
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
