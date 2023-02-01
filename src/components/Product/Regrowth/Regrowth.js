// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./Regrowth.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./hair_oil/hairoil1.png";
import img2 from "./hair_oil/hairoil2.png";
import img3 from "./hair_oil/hairoil3.png";
import img4 from "./hair_oil/hairoil4.jpg";
import img5 from "./hair_oil/hairoil5.png";
import img6 from "./hair_oil/hairoil6.jpg";
import img7 from "./hair_oil/hairoil7.jpg";
import img8 from "./hair_oil/hairoil8.jpg";
import img9 from "./hair_oil/hairoil9.jpg";

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
                  COMPLETE FORMULA FOR HAIR REGROWTH AND ANTIHAIRFALL
                </h2>
                <p class="text-capitalize">
                  Proceed by authentic ayurvedic process. All hair nurishment
                  ayurvedic herbs processed Into cold press coconut oil and
                  sesame oil <br />
                  Provids deep nurishment by coconut milk.as you all know
                  coconut is superfood for Hair amla is helpful for hair
                  regrowth <br />
                  Hibiskus repair damage hair <br />
                  Bhringaraj controls hair fall <br />
                  Aloe vera makes smooth and silky hair <br />
                  <b>HOW TO USE</b> <br />
                  Apply luckwarm oil with cotton and give point to point massage
                  to hair root <br />
                  For best result apply regularly <br />
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
