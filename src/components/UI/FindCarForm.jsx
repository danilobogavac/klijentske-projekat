import React from "react";

import "../../styles/find-car-from.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Adresa prijema vozila" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Adresa predaje vozila" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Datum:" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Vreme:"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Sa klimom</option>
            <option value="non-ac">Bez klime</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Pronađi vozilo</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
