// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./Shampoo.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./shampoo/shampoo1.png";
import img2 from "./shampoo/shampoo2.jpg";
import img3 from "./shampoo/shampoo3.jpg";
import img4 from "./shampoo/shampoo4.jpg";
import img5 from "./shampoo/shampoo5.jpg";
import img6 from "./shampoo/shampoo6.png";
import img7 from "./shampoo/shampoo7.jpg";

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
                </div>
              </div>
              <div className="col-sm-4">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="img-fluid" src={img1} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img2} alt="img1" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img3} alt="img2" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img4} alt="img3" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img5} alt="img4" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img6} alt="img5" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img7} alt="img6" />
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
                <h2 class="text-uppercase"> NISARGA AYURVEDA SHAMPOO POWDER</h2>
                <p class="text-uppercase">
                  Enriched With the power of ritha, shikakai, amla,
                  kapoorkachari and NAGERMOTHA, METHI ayurvedic herbs <br />
                  Reduce hair fall,repair damage hair.Make your hair smooth and
                  silky by deep cleanning
                  <br />
                  <b>HOW TO USE</b> <br />
                  1.As per length of hair take suitable amount of shampoo
                  powder(1-2 spoon) into atleast 200ml water ,mix properly,boil
                  and reduce upto 100ml,cool it and apply on scalp and hair.If
                  you have no time then apply the paste as it is.it works the
                  same.
                  <br />
                  2.leave for 5-10 minutes,and rinse by lukewarm water.No need
                  to use any other shampoo .<br />
                  3.For best result use regularly twice a week as per
                  instructions.
                  <br />
                  For external use only.
                  <br />
                  Preserve airtight to protect from moisture and sunlight.
                  <br />
                  Free from harmful chemical,preservatives,and from artificial
                  color and fragrance
                  <br />
                  This product is totally plannet friendly
                  <br />
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
