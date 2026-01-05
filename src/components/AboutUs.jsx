import React from 'react';
import "../App.css"
const AboutUs = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="about-hero d-flex align-items-center justify-content-center text-center">
  <div className="overlay"></div>
  <div className="hero-text">
    <h1 className="fw-bolder display-4">🌍 About Travelo</h1>
    <p className="lead mt-3">Explore the world with confidence and comfort</p>
  </div>
</div>


      {/* ABOUT SECTION */}
      <div className="container-fluid py-5 bg-dark ">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="about mb-5 p-4 shadow-sm ">
              <p className="fs-5 text-white mb-3">
                We believe that travel is more than just visiting new places — it’s about creating memories, discovering cultures, and experiencing the beauty of the world in a meaningful way. Our mission is to inspire travelers to explore nature, cities, and hidden destinations with confidence and comfort.
              </p>

              <p className="fs-5 text-white mb-3">
                With a passion for adventure and a love for storytelling, we bring together carefully curated destinations, helpful travel planning tools, and visually engaging experiences.
              </p>

              <p className="fs-5 text-white">
                We focus on simplicity, reliability, and user-friendly design so that your travel planning feels effortless. Join us as we explore the world together — one journey, one story, and one unforgettable experience at a time.
              </p>
            </div>

            {/* OFFER SECTION */}
            <div className="offers py-4">
              <h2 className="fw-bold mb-5 text-success text-center">✨ What We Offer</h2>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="offer-card p-4 shadow-sm rounded" style={{backgroundColor:'#ffffff'}}>
                    <h4 className="fw-semibold mb-2">🧭 Destination Discovery</h4>
                    <p className="text-muted mb-0">
                      Explore beautiful cities and countries around the world. Discover places based on your interests and curiosity.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="offer-card p-4 shadow-sm rounded" style={{backgroundColor:'#ffffff'}}>
                    <h4 className="fw-semibold mb-2">🔍 Smart Search Experience</h4>
                    <p className="text-muted mb-0">
                      Fast, intuitive, and user-friendly search makes travel planning smoother and efficient.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="offer-card p-4 shadow-sm rounded" style={{backgroundColor:'#ffffff'}}>
                    <h4 className="fw-semibold mb-2">🎨 Clean & Minimal Design</h4>
                    <p className="text-muted mb-0">
                      Focused, minimal design keeps users engaged while maintaining a professional feel.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="offer-card p-4 shadow-sm rounded" style={{backgroundColor:'#ffffff'}}>
                    <h4 className="fw-semibold mb-2">📱 Responsive Interface</h4>
                    <p className="text-muted mb-0">
                      Works seamlessly across all devices for effortless travel planning anytime, anywhere.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="offer-card p-4 shadow-sm rounded" style={{backgroundColor:'#ffffff'}}>
                    <h4 className="fw-semibold mb-2">🚀 Continuous Improvement</h4>
                    <p className="text-muted mb-0">
                      We improve our platform constantly based on user feedback for better performance.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="offer-card p-4 shadow-sm rounded" style={{backgroundColor:'#ffffff'}}>
                    <h4 className="fw-semibold mb-2">🤝 Our Vision</h4>
                    <p className="text-muted mb-0">
                      To be a trusted travel companion worldwide, inspiring confidence, curiosity, and excitement.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutUs;
