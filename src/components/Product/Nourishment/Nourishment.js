// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./Nourishment.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./nourishment/nourishment1.jpg";
import img2 from "./nourishment/nourishment2.jpg";
import img3 from "./nourishment/nourishment3.png";
import img4 from "./nourishment/nourishment4.png";
import img5 from "./nourishment/nourishment5.jpg";

const Nourishment = () => {
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
                  NISARGA AYURVEDA Hair Nourishment Powder
                </h2>
                <p class="text-uppercase">
                  MAKE HAIR THICKER AND,LUSTUROUS BY PROVIDING DEEP NURISHMENT{" "}
                  <br />
                  PREVENTS HAIR FALL,MAKES YOUR HAIR STRONG BY <br />
                  JASWAND, AMALA, TRIFALA, BHRUNGARAJ, BRAMHI, JATAMANSI <br />
                  <b>HOW TO USE</b> <br />
                  1.As per length of hair take suitable amount of powder (1-2
                  spoon) and add fresh coconut milk,mix properly and rest for 1
                  hour . <br />
                  2.Apply thick paste on root of hair.Cover complete scalp and
                  hair by this paste and wear shower cap to maintain moisture.{" "}
                  <br />
                  3.Rinse by lukewarm water after 2 hour. <br />
                  4.DO NOT USE ANY OTHER SHAMPOO. <br />
                  5.For best result use WEEKLY ONCE as per instructions,for
                  external use only. <br />
                  6.preserve airtight to protect from moisture and sunlight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Nourishment;
