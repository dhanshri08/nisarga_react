// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./Relief.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./relief/painoil1.png";
import img2 from "./relief/painoil2.png";
import img3 from "./relief/painoil3.jpg";
import img4 from "./relief/painoil4.jpg";
import img5 from "./relief/painoil5.png";
import img6 from "./relief/painoil6.jpg";

const Relief = () => {
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
                <h2 class="text-uppercase">NISARGA AYURVEDA PAIN RELIEF OIL </h2>
                <p class="text-uppercase">
                  RELIEVES ALL TYPES OF BODY PAIN LIKE MUSCLE PAIN,JOINT
                  PAIN,CERVICAL PAIN,BACK PAIN,MUSCLE SPRAIN. <br />
                  DHATURA,ERANDA,ARKA,GULVEL,SHEVAGA,NIRGUNDI FRESH LEAF JUICE
                  IS PROCSSED INTO MUSTERD OIL AND SEASAM OIL. <br />
                  <b>HOW TO USE</b> <br />
                  PUT 4—5 DROPS ON PAINFUL AREA,GIVE GENTLE MASSAGE AND COVER BY
                  WARM CLOTH.PROTECT FROM COLD AIR. <br />
                  PROTECT FROM EYE ,NOSE,EAR <br />
                  FOR EXTERNAL USE ONLY <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Relief;
