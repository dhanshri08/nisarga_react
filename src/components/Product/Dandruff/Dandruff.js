// src/reusable/image-gallery.component.js
import React from "react";  
import "../product.css";
import "./Dandruff.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./dandruff/dandruff1.png";
import img2 from "./dandruff/dandruff2.jpg";
import img3 from "./dandruff/dandruff3.jpg";
import img4 from "./dandruff/dandruff4.jpg";
import img5 from "./dandruff/dandruff5.jpg";
import img6 from "./dandruff/dandruff6.jpg";
import img7 from "./dandruff/dandruff7.png";
import img8 from "./dandruff/dandruff8.jpg";
import img9 from "./dandruff/dandruff9.jpg";
import img10 from "./dandruff/dandruff10.jpg";

const Dandruff = () => {
  return (
    <>
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                <div className="carousel-indicators ms-5">
                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    className="active btn btn1"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className="btn btn2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    className="btn btn3"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                    className="btn btn4"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                    className="btn btn5"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                    className="btn btn6"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="6"
                    aria-label="Slide 7"
                    className="btn btn7"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="7"
                    aria-label="Slide 8"
                    className="btn btn8"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="8"
                    aria-label="Slide 9"
                    className="btn btn9"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="9"
                    aria-label="Slide 10"
                    className="btn btn10"
                  ></button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="img-fluid" src={img1} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img2} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img3} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img4} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img5} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img6} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img7} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img8} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img9} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img10} alt="img" />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="col-sm-6">
                <h2 class="text-uppercase">
                  NISARGA AYURVEDA Antidandruff powder
                </h2>
                <p class="text-uppercase">
                  STRENGTHEN ROOTS AND PREVENTS dandruff and itchy scalp <br />
                  Enriched with NEEM, TULSI, TRIPHALA, KAPOORKACHAARI,
                  nagermotha AND FIVE OTHER AYURVEDIC HERBS <br />
                  REMOVE DANDRUFF AND FUNGAL INFECTION BY ANTIBACTERIAL AND
                  ANTIFUNGAL PROPERTIES OF TULSI AND NEEM. <br />
                  <b>HOW TO USE</b> <br />
                  1.As per length of hair take suitable amount of powder(minimum
                  1-2 spoon) and add 1-2 spoon curd,mix properly and rest for
                  one hour. <br />
                  2.Apply thick paste on root of hair,cover complete scalp and
                  hair.Wear shower cap to maintain moisture. <br />
                  3.Rinse by lukewarm water after 2 hours,no need to apply any
                  other shampoo. <br />
                  4.For best result use regularly for weekly once or twice.{" "}
                  <br />
                  For external use only.useful for men and women <br />
                  Preserve airtight to protect from moisture and sunlight.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Dandruff;
