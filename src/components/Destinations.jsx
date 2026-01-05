import React, { useState } from 'react'
import "../App.css"
import { tours } from '../Data'
import { destinations } from '../Data'

const Destinations = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerView = 4

  const handleNext = () => {
    if (currentIndex < tours.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className='container'>
      <h1 className=' mt-5  text-center fw-bolder '>Top Destination Places For Your Next Trip</h1>

      <div className="slider-wrapper mt-5">

        <button className="nav-btn left" onClick={handlePrev}>
          ❮
        </button>

        <div className="destination-slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {
              tours.map((item) => (
                <div className="slide" key={item.id}>
                  <img src={item.image} alt="" />
                </div>
              ))
            }
          </div>
        </div>

        <button className="nav-btn right" onClick={handleNext}>
          ❯
        </button>

      </div>


<h1 className=' text-center  fw-bolder mb-5 mt-5'>Popular Places</h1>


      <div className="destination-grid ">
        {destinations.map((item) => (
          <div className="destination-card  shadow" key={item.id}>

            <div className="card-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="card-content  text-center p-3">
              <h4 className="title fw-bold">{item.title}</h4>
                            <p className="location">📍{item.description}</p>


              <div className="rating">
                ⭐ {item.rating} <span>({item.reviews} reviews)</span>
              </div>

              

              <div className="card-footer">
                <p className="price"> ${item.price} For({item.days}) days</p>
              </div>
            </div>

          </div>
        ))}
      </div>






    </div>
  )
}

export default Destinations
