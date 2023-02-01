// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./Bath.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./bath_powder/powder1.png";
import img2 from "./bath_powder/powder2.jpg";
import img3 from "./bath_powder/powder3.jpg";
import img4 from "./bath_powder/powder4.jpg";
import img5 from "./bath_powder/powder5.jpg";
import img6 from "./bath_powder/powder6.png";
import img7 from "./bath_powder/powder7.png";

const Bath = () => {
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
                <h2 class="text-uppercase">NISARGA AYURVEDA BATH POWDER</h2>

                <p class="text-uppercase">
                  <b>FOR DAILY USE</b> <br />
                  PROTECTS YOUR SKIN FROM HARMFUL CHEMICAL BASED SOAPS AND BATH
                  SALTS. <br />
                  BENEFICIAL FOR FUNGUS ,ITCHY DEAD SKIN AND GIVES DAZZELING
                  GLOW TO YOUR SKIN.IMPROVES <br />
                  SKIN IMMUNITY TO FIGHT ANAINST VIRUSES POLLUTION <br />
                  WITH THE GOODNESS OF ORANGE PEELPOWDER ,CHANDAN,GULAB
                  ,NEEM,AMAHALDI,MULTANI MITTI <br />
                  GET ALL BENEFITS BY REGULAR USE. <br />
                  <b>HOW TO USE </b>
                  <br />
                  MAKE A PASTE WITH MILK/ROSE WATRE/MINERAL WATER AS PER SKIN
                  TYPE <br />
                  APPLY ALL OVER BODY,TAKE A BATH BY GENTLE SCRUBBING <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bath;
