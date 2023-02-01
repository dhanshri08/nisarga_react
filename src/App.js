import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Head from "./components/include/Head";
import Product from "./components/Product";
import Video from "./components/Video";
import Clinic from "./components/Clinic";
import Phone from "./components/Phone";
import Panchkarma from "./components/Panchkarma";
import GoToTop from "./components/GoToTop";

import Acne from "./components/Product/Acne/Acne";
import Bath from "./components/Product/Bath/Bath";
import Conditioning from "./components/Product/Conditioning/Conditioning";
import Creame from "./components/Product/Creame/Creame";
import Dandruff from "./components/Product/Dandruff/Dandruff";
import Dye from "./components/Product/Dye/Dye";
import Glowing from "./components/Product/Glowing/Glowing";
import Nourishment from "./components/Product/Nourishment/Nourishment";
import Pigmentation from "./components/Product/Pigmentation/Pigmentation";
import Hairoil from "./components/Product/Regrowth/Regrowth";
import Relief from "./components/Product/Relief/Relief";
import Shampoo from "./components/Product/Shampoo/Shampoo";
import Tightening from "./components/Product/Tightening/Tightening";
import Ubatan from "./components/Product/Ubatan/Ubatan";

function App() {
  return (
    <div className="App">
      <Head />
      <Router>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light rounded"
          aria-label="Eleventh navbar example"
          style={{ backgroundImage: "url(/images/bg.jpg)" }}
        >
          <div className="container-fluid mx-2" >
            <img
              className="img-fluid m-1"
              src={"/images/logo.png"}
              style={{ height: "40px", width: "40px" }}
              alt="Logo"
              data-aos="fade-left"
            />
            <span className="navbar-brand" href="" data-aos="fade-left">
              Nisarga Ayurveda
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-aos="fade-right"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample09">
              <ul
                className="navbar-nav ms-auto mb-lg-0 "
                style={{ fontWeight: " 600" }}
                data-aos="fade-right"
              >
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <span
                    className="nav-link active dropdown-toggle"
                    href=""
                    id="dropdown09"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </span>
                  <ul className="dropdown-menu" aria-labelledby="dropdown09">
                    <li>
                      <Link className="nav-link active " to="/video">
                        Video consultation
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link active " to="/phone">
                        Phone consultation
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link active " to="/clinic">
                        Clinic consultation
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link active " to="/panchkarma">
                        Panchkarma
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/gallery">
                    Gallery
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active " to="/testimonal">
                    Testimonial
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active " to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route index element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/product/:id" element={<Detail />} /> */}
          <Route path="/video" element={<Video />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/panchkarma" element={<Panchkarma />} />

          <Route path="/acne" element={<Acne />} />
          <Route path="/bath" element={<Bath />} />
          <Route path="/conditioning" element={<Conditioning />} />
          <Route path="/creame" element={<Creame />} />
          <Route path="/dandruff" element={<Dandruff />} />
          <Route path="/dye" element={<Dye />} />
          <Route path="/glowing" element={<Glowing />} />
          <Route path="/nourishment" element={<Nourishment />} />
          <Route path="/pigmentation" element={<Pigmentation />} />
          <Route path="/hairoil" element={<Hairoil />} />
          <Route path="/reliefoil" element={<Relief />} />
          <Route path="/shampoo" element={<Shampoo />} />
          <Route path="/tightening" element={<Tightening />} />
          <Route path="/ubatan" element={<Ubatan />} />

          <Route path="/testimonal" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <GoToTop />
    </div>
  );
}

export default App;
