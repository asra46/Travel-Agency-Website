import React, { useState } from "react";
import heroImg from "../images/popular/Kiwiana Panorama.jpg";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.travelers.trim()) {
      newErrors.travelers = "Number of travelers is required";
    }

    return newErrors;
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Your booking request has been sent successfully!");

      // clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        travelers: "",
        notes: "",
      });
    }
  };

  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <div className="contact-hero">
        <img src={heroImg} alt="Booking Hero" />
        <div className="hero-overlay"></div>

        <div className="hero-text">
          <h1>Book Your Trip</h1>
          <p>Fill out the form below to request your booking</p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="contact-form-box">
        <h2>Booking Form</h2>

        {success && <p className="success-msg">{success}</p>}

        <form onSubmit={handleSubmit} noValidate>

          <div className="mb-3">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Number of Travelers *</label>
            <input
              type="text"
              name="travelers"
              className="form-control"
              value={formData.travelers}
              onChange={handleChange}
            />
            {errors.travelers && (
              <small className="error">{errors.travelers}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Additional Requests / Notes</label>
            <textarea
              name="notes"
              className="form-control"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit Booking
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
