import React from "react";
import { Link } from "react-router-dom";
import ExternalRedirect from "../ExternalRedirect";

const Footer = () => {
  return (
    <>
      <footer
        className="footer_section px-5 py-3"
        style={{ background: "#171717", color: "#fff" }}
      >
        <div className="row">
          <div className="col-md-4 col-lg-4  footer_col">
            <div className="footer_contact footer_links ">
              <h4 className="text-center" style={{ background: "#171717", color: "#fff" }}>Reach at..</h4>
              <div className="contact_link_box mt-5">
                <p>
                  <a href="https://goo.gl/maps/sniWAz5Js1eCefTMA">
                    <i
                      className="fa fa-map-marker"
                      aria-hidden="true"
                      style={{ color: "red" }}
                    ></i>
                    <span>
                      FLAT C-413,BUILDING NO.1,MHADA CITY,OPPOSITE HOTEL BRIJ
                      INN, BEHIND DWARKAMAI HOTEL, NEAR MAIN BUS STAND CHOWK,
                      GANESHPETH, NAGPUR PIN CODE 440018, MAHARASHTRA.
                    </span>
                  </a>
                </p>
                <p>
                  <a href="tel:+918208787115">
                    <i
                      className="fa fa-phone"
                      aria-hidden="true"
                      style={{ color: "chartreuse" }}
                    ></i>
                    <span>Call +91 82087 87115</span>
                  </a>
                </p>
                <p>
                  <a href="mailto:yogini.megha@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    yogini.megha@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 footer_col">
            <div className="footer_detail">
              <h4 className="text-center"style={{ background: "#171717", color: "#fff" }}>About</h4>
              <p className=" mt-5">
                Founded in 2014 by Dr Megha Kelwade. NISARGA AYURVEDA provides a
                vast range of beauty and health care products that are 100%
                natural and processed using traditional authentic ayurvedic
                methods. We also provide various ayurvedic panchakarma
                treatments with complete consultation and guidance before and
                after treatment by the capable hands of Dr. Megha Kelwade .
              </p>
            </div>
            <div className="">
              <ExternalRedirect />
              
            </div>
          </div>
          <div className="col-md-4 col-lg-2  footer_col">
            <div className="footer_link_box">
              <h4 className="text-center"style={{ background: "#171717", color: "#fff" }}>Pages</h4>
              <div className="footer_links  mt-5">
                <ul>
                  <li>
                    <Link className="nav-link " to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link " to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link " to="/product">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link " to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link " to="/testimonal">
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link " to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <img src={'../images/QRCODE.jpg'} alt="QR" height="100px" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-info text-center  py-1">
          <p>
            &copy; 2022 All Rights Reserved By
            <strong> Dr. Megha Kelwade.</strong>
            <span className="ml-5">
              {" "}
              Designed By <a href="https://iceico.in//" className="text-white">
                <strong>ICEICO Technologies</strong>
              </a>
            </span>
          </p>
          <a
            className="whats-app"
            href="https://wa.me/918208787115"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-whatsapp my-float"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
