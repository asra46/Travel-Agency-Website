import React, { useEffect, useState } from "react";
import { images, searchData } from "../Data";
import "../App.css";
import { FaSearch } from "react-icons/fa";
import img1 from "../images/tour/img1.jpg"
import img2 from "../images/tour/img2.jpg"
import img3 from "../images/tour/img3.jpg"
import img4 from "../images/tour/Tokyo.png"

const Home = () => {
  // ---------------- SLIDER ----------------
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // ---------------- SEARCH ----------------
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === "") {
      setFilteredData([]);
      return;
    }

    const result = searchData.filter(
      (item) =>
        item.city.toLowerCase().includes(value.toLowerCase()) ||
        item.country.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(result);
  };

  return (
    <>
      {/* ---------------- HERO SLIDER ---------------- */}
      <div className="hero">
        <img
          src={images[index].image}
          alt="slider"
          className="hero-img"
        />

        <div className="content text-white">
          <h1>Journey to Explore The World</h1>
          <p>Travel | Adventure | Memories</p>
        </div>

        <button className="nav-btn left">
          &#10094;
        </button>
        <button className="nav-btn right">
          &#10095;
        </button>
      </div>

      {/* ---------------- SEARCH FORM ---------------- */}
      <div className="row justify-content-center mb-5 ">
        <div className="col-12 col-lg-10">
          <form className="search-form shadow rounded-4 bg-white">

            {/* LOCATION */}
            <div className="form-group">
              <label className="form-label">Location</label>

              <div className="search-input">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Where are you going?"
                  value={searchText}
                  onChange={handleSearch}
                />
                <FaSearch className="search-icon" />
              </div>

              {filteredData.length > 0 && (
                <ul className="search-dropdown">
                  {filteredData.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setSearchText(`${item.city}, ${item.country}`);
                        setFilteredData([]);
                      }}
                    >
                      {item.city}, <span>{item.country}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CHECK IN */}
            <div className="form-group">
              <label className="form-label">Check In</label>
              <input type="date" className="form-control" />
            </div>

            {/* CHECK OUT */}
            <div className="form-group">
              <label className="form-label">Check Out</label>
              <input type="date" className="form-control" />
            </div>

            {/* BUTTON */}
            <div className="form-group">
              <button className="btn btn-primary w-100 mt-4">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* ---------------- explore ---------------- */}



<div className="container-fluid  p-5 overflow-hidden">
  <div className="row align-items-center">

    <div className="col-12 col-lg-6">
      <div className="text p-5">
        <h1 className=" fw-bold fs-1 text-capitalize">Explore The Mighty Nature With Us</h1>
        <p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, atque. Dolorum, placeat! Impedit atque iusto, sed eum necessitatibus repellat assumenda quidem eos exercitationem dicta commodi quod reprehenderit veniam quasi quaerat?        </p>
      </div>
    </div>

    <div className="col-12 col-lg-6 p-5">
      <div className="image-stack">
        <img src={img1} className="img img-1" />
        <img src={img2} className="img img-2" />
        <img src={img3} className="img img-3" />
        <img src={img4} className="img img-4" />
      </div>
    </div>

  </div>
</div>


    </>
  );
};

export default Home;
