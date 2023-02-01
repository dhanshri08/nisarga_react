// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./Dye.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./dye/hair_dye1.png";
import img2 from "./dye/hair_dye2.jpg";
import img3 from "./dye/hair_dye3.jpg";
import img4 from "./dye/hair_dye4.jpg";
import img5 from "./dye/hair_dye5.jpg";
import img6 from "./dye/hair_dye6.jpg";
import img7 from "./dye/hair_dye7.jpg";
import img8 from "./dye/hair_dye8.jpg";
import img9 from "./dye/hair_dye9.jpg";
import img10 from "./dye/hair_dye10.jpg";
import img11 from "./dye/hair_dye11.jpg";

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

                  <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="10"
                    aria-label="Slide 11"
                    className="btn btn11"
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

                  <div className="carousel-item">
                    <img className="img-fluid" src={img11} alt="img" />
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
                  NISARGA AYURVEDA NISARGA AYURVEDA HAIR DYE
                </h2>
                <p class="text-uppercase">
                  ENRICHED WITH HEENA POWDER AND INDIGO POWDER <br />
                  Converts grey and white hair into coffee brown AND BLACK{" "}
                  <br />
                  Long lasting colour and shine,makes hair thicker and lusturous{" "}
                  <br />
                  Prevents premature greying <br />
                  <b>HOW TO USE HEENA POWDER FIRST COAT</b> <br />
                  1.Depending upon the number of white and grey hair,make a
                  thick paste of HEENA POWDER using water,cover it tightly and
                  leave for overnight. 2.Next morning apply on grey and white
                  hair,make sure your scalp is not oily. <br />
                  3.Cover the scalp by shower cap to maintain moisture. <br />
                  4.Leave for 2 hours,then rinse by lukewarm water. <br />
                  5.Do not use any other shampoo,leave for one day for darken
                  the color.After that you have to apply <br /> <br />
                  NISARGA AYURVEDA SECOND COAT INDIGO POWDER .AFTER COFFEE BROWN
                  COLOUR OF HEENA <br />
                  POWDER APPLY INDIGO POWDER ,IT CONVERT INTO BLACK COLOUR{" "}
                  <br />
                  NISARGA AYURVEDA NATURAL HAIR COLOR <br />
                  2.INDIGO POWDER SECOND COAT <br />
                  CONVERTS GREY AND WHITE HAIR INTO BLACK NATURALLY <br />
                  PREVENTS PREMATURE GREYING WITHOUT DAMAGING NATURAL MELANIN OF
                  HAIR <br />
                  LONG LASTING BLACK COLOR AND SHINE <br /> <br />
                  <b>HOW TO USE SECOND COAT INDIGO POWDER </b>
                  <br />
                  1.Depending upon number of brown color hair make thick paste
                  of second coat OF INDIGO POWDER. into a glass Bowl by addind
                  warm water. for dry hair add 2 TSF fresh curd and aloe vera
                  gel and cover it tightly.let it rest for 20—30minutes,after
                  that it will change its color. FOR BEST RESULT you can use
                  plain indigo powder . <br />
                  2.Apply the paste on heena treated brown coloured hair and
                  cover by shower cap to maintain moisture . <br />
                  3.Leave it for maximum 2 hours.After that rinse by lukewarm
                  water the hair color. <br />
                  4.This product is extensively tried and tested meny times on
                  meny people and has no side effect.Sometimes you feel
                  heaviness on head.AFTER second or third day you have to apply
                  nisarga ayurvedic hair oil and hair conditioning hair mask
                  powder pack for softening the hair <br />
                  5.This is purely Ayurvedic product.For best result apply as
                  per instructions. <br />
                  6.Preserve airtight to protect from moisture and sunlight.{" "}
                  <br />
                  7.For external use only <br />
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
