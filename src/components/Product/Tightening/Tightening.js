// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./Tightening.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./tightening/tightening1.png";
import img2 from "./tightening/tightening2.png";
import img3 from "./tightening/tightening3.png";
import img4 from "./tightening/tightening4.png";

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
                </div>
              </div>
              <div className="col-sm-4">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="img-fluid" src={img1} alt="img1" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img2} alt="img2" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img3} alt="img3" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={img4} alt="img4" />
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
                  NISARGA AYURVEDA FACE PACK FOR SKIN TIGHTENING
                </h2>
                <p class="text-uppercase">
                  HELPS TO REDUCE AGEING BY TIGHTENING LOOSE SKIN. <br />
                  BY THE PROPERTIESE OF LODHRA,TRIPHALA,CHANDAN,MULETHI <br />
                  THIS IS PURELY HANDMADE PRODUCT MADE USING AUTHENTIC AYURVEDIC
                  PROCESS <br />
                  <b>HOW TO USE</b> <br />
                  DISSOLVE DINK(GOND) INTO WATER OR RAW MILK AND ADD PACK INTO
                  THIS SOAK FOR 5—10 MIN <br />
                  APPLY THICK PASTE ON FACE AND NECK.WASH AFTER 10 MINUTES BY
                  NORMAL WATER <br />
                  USE WEEKLY TWICE FOR BEST RESULT <br />
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
