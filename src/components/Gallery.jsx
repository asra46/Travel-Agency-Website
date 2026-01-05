import React from 'react';
import { gallery } from '../Data';
import '../App.css'; // we'll add some custom styles

const Gallery = () => {
  return (
    <div className="container-fluid p-5 bg-dark    ">
      <h1 className="text-center text-white  fw-bold mb-5 mt-5">Gallery</h1>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div className="gallery-item" key={item.id}>
            <img
              src={item.image}
              alt={`Gallery ${item.id}`}
              className="gallery-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
