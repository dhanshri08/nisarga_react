// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./Pigmentation.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./pigmentation/pigmentation1.png";
import img2 from "./pigmentation/pigmentation2.png";
import img3 from "./pigmentation/pigmentation3.png";
import img4 from "./pigmentation/pigmentation4.png";
import img5 from "./pigmentation/pigmentation5.jpg";

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
                <h2 className="text-uppercase">
                  NISARGA AYURVEDA Pigmentation Face Pack
                </h2>
                <p className="text-capitalize">
                  TREATS DEEP TANNING AND PIGMENTATION <br />
                  MINIMIZE DARK SPOTS,SCAR MARKS,HELPS IN PROTECTING SKIN FROM
                  HARMFUL UV RAYS <br />
                  BY THE POWER OF MANJISHTHA,MULETHI,TRIPHALA,TURMERIC,GULAB AND
                  CHANDAN <br />
                  THIS IS HANDMADE PRODUCT USING AUTHENTIC AYURVEDIC PROCESS{" "}
                  <br />
                  <b>HOW TO USE</b> <br />
                  ADD CURD/HONEY/MILK/ROSE WATER/MINERAL WATER AS PER SKIN TYPE
                  AND SOAK FOR 1—2 MINUTES. <br />
                  GENTLE MASSAGE TO PENETRATE THE PIGMENTED AREA AND APPLY THICK
                  PASTE. <br />
                  WASH AFTER 10 MINUTES BY GENTLE MASSAGING THE SKIN.
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
