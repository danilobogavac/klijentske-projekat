// BookingForm.js

import React, { useState } from "react";
import "../../styles/booking-form.css"; // Uvezi CSS stilove

const BookingForm = ({ onBookingComplete }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pretend to submit form
    console.log("Booking form submitted:", formData);
    onBookingComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="booking__form"> {/* Dodaj klasu booking__form */}
      <div className="form-group">
        <label>Ime</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-control" /> {/* Dodaj klasu form-control */}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" /> {/* Dodaj klasu form-control */}
      </div>
      <div className="form-group">
        <label>Telefon</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="form-control" /> {/* Dodaj klasu form-control */}
      </div>
      <div className="form-group">
        <label>Datum</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="form-control" /> {/* Dodaj klasu form-control */}
      </div>
      <div className="form-group">
        <label>Vreme</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required className="form-control" /> {/* Dodaj klasu form-control */}
      </div>
    </form>
  );
};

export default BookingForm;
