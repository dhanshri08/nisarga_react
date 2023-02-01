import React from "react";
import Footer from "./include/Footer";

const Contact = () => {
  return (
    <>

      <section className="contact_section layout_padding">
        <div className="container" style={{marginTop: '50px'}}>
          <div className="heading_container">
            <h2>Get In Touch</h2>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="form_container contact-form">
                <form method="post" id="frmContactus">
                  <div className="row my-2">
                    <div className="col-lg-6">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter name"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="Enter mobile"
                          name="mobile"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-12">
                      <div>
                        <input
                          type="email"
                          className="form-control my-2 "
                          id="email"
                          placeholder="Enter email"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                  <input
                          type="text"
                          className="form-control message-box mb-2"
                          id="mobile"
                          placeholder="Enter mobile"
                          name="mobile"
                          required
                        />
                  </div>
                  <div className="btn_box">
                    <button
                      type="submit"
                      className="btn btn-success"
                      name="submit"
                      id="submit"
                    >
                      Submit
                    </button>
                    <span style={{color:'red'}} id="msg"></span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.6274651770314!2d79.09366979611303!3d21.14225067452556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0bf50233119%3A0x55a5425daaaa89d9!2sNisarga%20Ayurveda%20Chikitsa%20%7C%20Best%20Ayurvedic%20Doctor%20In%20Nagpur%20%7C%20Panchkarma%20In%20Nagpur!5e0!3m2!1sen!2sin!4v1663577432158!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{border:'0',width:"100%"}}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
