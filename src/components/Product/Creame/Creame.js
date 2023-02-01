// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./Creame.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./creame/creame1.png";
import img2 from "./creame/creame2.png";
import img3 from "./creame/creame3.png";
import img4 from "./creame/creame4.png";
import img5 from "./creame/creame5.png";
import img6 from "./creame/creame6.jpg";
import img7 from "./creame/creame7.jpg";
import img8 from "./creame/creame8.jpg";

const Creame = () => {
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
                  NISARGA AYURVEDA DAILY MOISTURIZING CREAM
                </h2>
                <p class="text-uppercase">
                  ANTIAEGING CREAM,ANTIWRINKLE CREAM,SUNSCREEN CREAM <br />
                  PURE COW GHEE IS WASHED BY 100 TIMES BY AUTHENTIC AYURVEDIC
                  PROCESS.BY ITS COOLING PROPERTIES IT PROTECTS OUR SKIN FROM
                  HARMFUL UV RAYS ,WORKS AS SUNSCREEN CREAM, <br />
                  COW GHEE IS WORK AS ANTIAEGING ,ANTIWRINKLE,AND AS A DAILY
                  MOISTURIZER.
                  <br />
                  SAY No preservatives,no chemical, <br />
                  Only single ingredients is cow ghee <br />
                  FOR DAILY FACE CARE <br />
                  ANCIENT AYURVEDIC FACE CREAM <br />
                  EXCELLANT MOISTURIZER ,REPAIR AND NURISHMENT <br />
                  ZERO CHEMICAL GUARANTEED
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Creame;
