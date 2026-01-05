import React from 'react';
import { tours } from '../Data';
import '../App.css'; // We'll add some styles

const Tours = () => {
  return (
    <div className="container my-5 ">
      <h1 className="text-center text-success fw-bold mb-4">Our Tours</h1>
      <div className="tours-grid">
        {tours.map((data) => (
          <div className="card tour-card  shadow" key={data.id}>
            <img
              src={data.image}
              className="card-img-top tour-img"
              alt={data.title}
            />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
              <a href="#" className="btn btn-primary">
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
