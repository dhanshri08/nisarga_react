import React from "react";

import Footer from "./include/Footer";

const About = () => {
  return (
    <>
    <div className="container m-5">
        <div className="row">
          <div className="col-sm-6">
            
            <img
            style={{borderRadius:'10%'}}
              className="img-fluid m-1"
              src={"/images/Gallery/n-image-2.jpg"}
              alt="Logo"
            />
          </div>
          <div className="col-sm-6">
            <h2>
              ABOUT US
            </h2>
            <p className="mt-5">
            Founded in 2014 by Dr Megha Kelwade. NISARGA AYURVEDA provides a vast range of beauty and health care products that are 100% natural and processed using traditional authentic ayurvedic methods. We also provide various ayurvedic panchakarma treatments with complete consultation and guidance before and after treatment by the capable hands of Dr. Megha Kelwade .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
