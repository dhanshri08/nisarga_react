import React from "react";
import { Link } from "react-router-dom";
import Carausal from "./Carausal";
import Footer from "./include/Footer";
const Home = () => {
  return (
    <>
      <Carausal />

      <div style={{ backgroundImage: "url(/images/bg.jpg)" }}  data-aos="fade-down">
        <h3 className="text-center py-3">
          NISARGA AYURVEDA CHIKITSA & PANCHAKARMA CENTER,NAGPUR
        </h3>
        <div className="row m-0">
          <div className="col-sm-3"  data-aos="fade-down">
            WE, AT NISARGA AYURVEDA MAKES SKIN CARE & HAIR CARE PRODUCTS WITH A
            100% NATURAL PROCESSES FOLLOWING AUTHENTIC AYURVEDIC METHODS AND
            STRIVE TO GIVE OUR CUSTOMERS THE BEST QUALITY PRODUTS AT REASONABLE
            RATES
          </div>
          <div className="col-sm-3"  data-aos="fade-down">
            <img className="img-fluid m-1" src={"/images/all1.png"} alt="Logo" />
          </div>
          <div className="col-sm-3"  data-aos="fade-down">
            <img
              className="img-fluid m-1"
              src={"/images/all2.png"}
              alt="Logo"
            />
          </div>
          <div className="col-sm-3"  data-aos="fade-down">
            <img
              className="img-fluid m-1"
              src={"/images/crop.png"}
              alt="Logo"
            />
          </div>
        </div>
      </div>
      <div className="py-5 px-1">
        <h2
          className="text-center"
          style={{ fontFamily: "Nuosu SIL,serif" }}
        >
          We Provide
          <span style={{ color: "hsl(34deg 95% 51%)" }}> Online </span>&
          <span style={{ color: "hsl(34deg 95% 51%)" }}> Offline </span>
          Consultantion By Expert Ayurveda Consultant After Prior Appoinment
          Only
        </h2>
        <div
          className="row  justify-content-center text-center my-5 mx-0 p-0"
          style={{ backgroundColor: "#e6e6e6" }}
        >
          <div className="col-md-3 ">
            <h3 style={{ fontFamily: "Lora serif" }}>
              <strong>Open</strong>
            </h3>
            <p>Monday to Saturday</p>
            <p>Time: 10:00am to 7:00pm </p>
          </div>
          <div className="col-md-3 ">
            <h3 style={{ fontFamily: "Lora serif" }}>
              <strong>On Sunday</strong>
            </h3>
            <p>Open By Appoinment Only</p>
            <p>Time: 10:00am to 5:00pm </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="row pt-2 mt-5 px-0"
          style={{ fontFamily: "Merriweather,serif" }}
        >
          <h2 className="text-center">
            OUR SERVICES
          </h2>
        </div>
      </div>
      <div className="row my-4 mx-2">
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1"
              src={"/images/phone.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
            <div className="card-body">
              <h5 className="card-title">Phone Consultation</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1"
              src={"/images/video.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />

            <div className="card-body">
              <h5 className="card-title">Video Consultation</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1"
              src={"/images/clinic.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />

            <div className="card-body">
              <h5 className="card-title">Clinic Consultation</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="btn mb-2 px-4 mt-2 float-end mx-3"
          style={{ backgroundColor: "rgb(68, 186, 72)" }}
        >
          <Link to="/panchkarma">
            <strong className="text-white">See More</strong>
          </Link>
        </button>
      </div>
      <div className="container-fluid">
        <div
          className="row pt-2 m-5 px-0"
          style={{ fontFamily: "Merriweather,serif" }}
        >
          <h2 className="text-center">
            <strong>OUR PRODUCTS</strong>
          </h2>
        </div>
      </div>
      <div className="row mx-2">
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1"
              src={"/images/carousel/shatadhouta ghrita2.png"}
              style={{ height: "300px" }}
              alt="Logo"
            />
            <div className="card-body">
              <h5 className="card-title">Daily Moisturizing Cream</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1"
              src={"/images/carousel/hair_dye.png"}
              style={{ height: "300px" }}
              alt="Logo"
            />

            <div className="card-body">
              <h5 className="card-title">Ayurvedic Hair Dye</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1"
              src={"/images/carousel/dandruff2.png"}
              style={{ height: "300px" }}
              alt="Logo"
            />

            <div className="card-body">
              <h5 className="card-title">Ayurvedic Anti-Dandruff Powder</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1"
              src={"/images/carousel/glowing1.png"}
              style={{ height: "300px" }}
              alt="Logo"
            />

            <div className="card-body">
              <h5 className="card-title">Face Pack For Glowing Skin</h5>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn mb-2 px-4 mt-2 float-end mx-3"
            style={{ backgroundColor: "rgb(68, 186, 72)" }}
          >
            <Link to="/product">
              <strong className="text-white">See More</strong>
            </Link>
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="row pt-2 m-5 px-0"
          style={{ fontFamily: "Merriweather,serif" }}
        >
          <h2 className="text-center">
            <strong>TESTIMONIAL</strong>
          </h2>
        </div>
      </div>

      <div className="row mx-2">
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1 rounded-circle h-25 w-50 m-auto"
              src={"/images/man.png"}
              style={{ height: "300px" }}
              alt="Logo"
            />
            <div className="card-body">
              <h5 className="card-title">Nidhish Sirsat</h5>
              <div className="card-text">
                Very nice experience in nisarg ayurveda chikitsa. Me and my
                family accepted nisarga ayurveda in our life. Thank you nisrga
                ayurveda being a part of our life..
                <div className="card-text">
                  <small className="text-muted">
                    <div className="SdClientDesc">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1 rounded-circle h-25 w-50 m-auto"
              src={"/images/man.png"}
              style={{ height: "300px" }}
              alt="Logo"
            />
            <div className="card-body">
              <h5 className="card-title">Anurag Lad</h5>
              <div className="card-text">
                Health, beauty and life improvement s by Dr. Megha Kelwade is
                must recommend to the people seeking overall personal
                well-being. Provided treatments are really helpful and in a 100%
                natural ayurvedic way..
                <div className="card-text">
                  <small className="text-muted">
                    <div className="SdClientDesc">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4">
          <div className="card">
            <img
              className="img-fluid m-1 rounded-circle h-25 w-50 m-auto"
              src={"/images/man.png"}
              style={{ height: "300px" }}
              alt="Logo"
            />
            <div className="card-body">
              <h5 className="card-title">Sakshi Milmile</h5>
              <div className="card-text">
                V.nice experience mam has helped to overcome from the problems
                of piles and even best centre for hair and skin
                treatment....piles had been treated successfully in just 7
                days..I recommend everyone to go through ayurveda once..
                <div className="card-text">
                  <small className="text-muted">
                    <div className="SdClientDesc">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn mb-2 px-4 mt-2 float-end mx-3"
            style={{ backgroundColor: "rgb(68, 186, 72)" }}
          >
            <Link to="/testimonal">
              <strong className="text-white">See More</strong>
            </Link>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ fontFamily: "Merriweather,serif" }}>
          <h2 className="text-center my-5 pt-2 px-0 ">
            <strong>OUR RESULTS</strong>
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/w1.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>

          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/w2.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>

          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/w3.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>

          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/w4.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>

          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/w5.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>

          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/w6.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>
          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/r1.png"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>

          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/r2.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>
          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/r3.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>
          <div className="col-sm-6 col-lg-2 mb-4">
            <img
              className="img-fluid m-1   m-auto"
              src={"/images/work/r4.jpg"}
              style={{ height: "300px" }}
              alt="Logo"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
