import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/elmin.png";
import ava02 from "../../assets/all-images/sofija.png";
import ava03 from "../../assets/all-images/vanja.png";
import ava04 from "../../assets/all-images/andjela.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Proše godine sam koristio usluge ove agencije za moje putovanje na Kosovo i Metohiju. Automobil je bio u savršenom stanju i uživao sam u mom letnjem odmoru!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Elmin Ahmeti</h6>
            <p className="section__description">Dorćol</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Kad god poželim da trknem do Pazove znam na koga da se oslonim. Oni su moji heroji!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sofija Bursać</h6>
            <p className="section__description">Stara Pazova</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Kada švercujete robu iz Mađarske bitno je da automobil nije vaš! Zbog toga sam uvek uz ove careve!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Vanja Antin</h6>
            <p className="section__description">Subotica</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Neću više da se guram sa ljudima u autobusu! Jendom nedeljno kada dolazim na faks želim da to bude gospodski. Vaša agencija i to omogućuje zbog pristupačnih cena!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Anđela Vasić</h6>
            <p className="section__description">Mladenovac</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
