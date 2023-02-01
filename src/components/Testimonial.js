import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./include/Footer";

const Testimonial = () => {
  return (
    <>
      <div className="container">
        <div className="section-header mt-5">
          <p
            className="text-center"
            style={{ fontFamily: "Nuosu SIL, serif", fontSize: "40px" }}
          >
            <strong> VALUABLE REVIEWS OF OUR CLIENTS</strong>
          </p>
        </div>
        <div
          id="carouselExample8"
          className="carousel carousel-dark slide bg-light my-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item text-center active"
              data-bs-interval="3000"
            >
              <div className="d-none d-md-block my-3">
                <img
                  src="images/man.png"
                  className="d-block text-center mx-auto rounded-circle my-3"
                  style={{width:"80px", height: "80px" }}
                  alt="..."
                />
                <p className="px-5">
                  Health, beauty and life improvement products by Dr. Megha
                  Kelwade is must recommend to the people seeking overall
                  personal well-being. Provided treatments are really helpful
                  and in a 100% natural ayurvedic way..
                </p>
                <h5 className="mb-4">Anurag lad</h5>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center" data-bs-interval="3000">
              <div className="d-none d-md-block  my-3">
                <img
                  src="images/man.png"
                  className="d-block text-center mx-auto rounded-circle my-3"
                  style={{width:"80px", height: "80px" }}
                  alt="..."
                />
                <p className="px-5">
                  
                  I hv used Antidandruff hair pack and it is very effective.
                  Thanks mam, keep making such Ayurvedic preparations....
                </p>
                <h5>Dr. Deven Sahu.</h5>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center" data-bs-interval="3000">
              <div className="d-none d-md-block  my-3">
                <img
                  src="images/man.png"
                  className="d-block text-center mx-auto rounded-circle my-3"
                  style={{width:"80px", height: "80px" }}
                  alt="..."
                />
                <p className="px-5">
                  
                  मॅम मला खूप छान रिझल्ट मिळाला आहे तुमच्या औषधांनी मूळव्याध पण माझी नाहीशी झाली आहे आणि चेहरा जो काळवंडला होता आणि मुरूम झाले होते खूपच तो पण रिझल्ट छान आला आहे आणि माझ्या मुलाला पण मी औषध घेतलं तो पण रिझल्ट छान आहे माझ्या भाचीला तोंडाला फोळ आले होते ते पण आता बरे झाले आहेत आपण ही सेवा अशीच चालू ठेवावी आणि आम्हाला याचा लाभ घेता यावा आपली सौ प्रीती शरद गिरडे चिमूर
                </p>
                <h5>Priti Girade</h5>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center" data-bs-interval="3000">
              <div className="d-none d-md-block  my-3">
                <img
                  src="images/man.png"
                  className="d-block text-center mx-auto rounded-circle my-3"
                  style={{width:"80px", height: "80px" }}
                  alt="..."
                />
                <p className="px-5">
                  
                  Me and my family using all your products like hair mask, shampoo, bath powder, hair oli, face cream& face masks from last 1 year. My skin started glowing and hair got stronger and there is no dandruff at all. I have stopped using outside products because I have seen a lot of results from aurvedic products. Thank u mam for better and very good results..
                </p>
                <h5>Yukta Chatare</h5>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center" data-bs-interval="3000">
              <div className="d-none d-md-block  my-3">
                <img
                  src="images/man.png"
                  className="d-block text-center mx-auto rounded-circle my-3"
                  style={{width:"80px", height: "80px" }}
                  alt="..."
                />
                <p className="px-5">
                  
                  Very nice experience in nisarg ayurveda chikitsa. Me and my family accepted nisarga ayurveda in our life. Thank you nisrga ayurveda being a part of our life..
                </p>
                <h5>Nidhish Sirsat</h5>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center" data-bs-interval="3000">
              <div className="d-none d-md-block  my-3">
                <img
                  src="images/man.png"
                  className="d-block text-center mx-auto rounded-circle my-3"
                  style={{width:"80px", height: "80px" }}
                  alt="..."
                />
                <p className="px-5">
                  
                  मी अर्चना रा. चंद्रपूर मला खूप महिन्यापासून अशक्तपणा आणि कंबर दुखीचा खूप त्रास होता. पण तो आता मेघा मॅडमच्या औषधांमुळे आणि त्यांनी दिलेल्या आहारातील बदलांमुळे खूप कमी झालेला आहे ा ...
                </p>
                <h5>Archana Yerewar</h5>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center" data-bs-interval="3000">
              <div className="d-none d-md-block  my-3">
                <img
                  src="images/man.png"
                  className="d-block text-center mx-auto rounded-circle my-3"
                  style={{width:"80px", height: "80px" }}
                  alt="..."
                />
                <p className="px-5">
                  
                  My mother was suffering from various issues related to arthritis. Tried every Allopathic medicine and doctor but that was only temporary relief. So we visited madam for treatment. She planned everything right from diet to Panchakarma. After treatment she got releif from pain. She feels more relax and comfortable after visiting Nisarga Ayurvedic Chikitsa. I recommend all patients who are not getting any response from allopathic treatment they must try Ayurvedic treatment with zero side effects..
                </p>
                <h5>Sanket Chavhan</h5>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center" data-bs-interval="3000">
              <div className="d-none d-md-block  my-3">
                <img
                  src="images/man.png"
                  className="d-block text-center mx-auto rounded-circle my-3"
                  style={{width:"80px", height: "80px" }}
                  alt="..."
                />
                <p className="px-5">
                  
                  V.nice experience mam has helped to overcome from the problems of piles and even best centre for hair and skin treatment....piles had been treated successfully in just 7 days..I recommend everyone to go through ayurveda once..
                </p>
                <h5>Sakshi Milmile</h5>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonial;
