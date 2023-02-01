// src/reusable/image-gallery.component.js
import React from "react";
import "../product.css";
import "./acne.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./acne/acne1.png";
import img2 from "./acne/acne2.png";
import img3 from "./acne/acne3.png";
import img4 from "./acne/acne4.png";

const Acne = () => {
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
                  NISARGA AYURVEDA Acne and skin infection
                </h2>
                <p class="text-uppercase">
                  REDUCES PIMPLES AND SKIN INFECTION BY ANTIVIRAL AND ANTI
                  BACTERIAL PROPERTIES OF NEEM AND TULSI. <br />
                  REMOVE EXCESS OIL,DIRT AND DEAD TISSUES FROM SKIN. IT CONTAINS
                  NEEM,TULASI,CHANDAN,MULETHI,MULTANI MITTI <br />
                  <b>HOW TO USE</b> <br />
                  ADD ROW MILK/ROSE WATER/HONEY/MINERAL WATER AS PER YOUR SKIN
                  TYPE <br />
                  SOAK FOR 1—2MINUTES. <br />
                  APPLY ON PIMPLES AND INFECTED SKIN <br />
                  WASH AFTER 10 MINUTES WITH NORMAL WATER. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Acne;
