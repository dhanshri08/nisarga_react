import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Link } from "react-router-dom";

const Carausal = () => {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2 className="mb-4">Acne & Skin Infection</h2>
                  <div className="text-center px-5 text-uppercase ">
                    REDUCES PIMPLES AND SKIN INFECTION BY ANTIVIRAL AND ANTI
                    BACTERIAL PROPERTIES OF NEEM AND TULSI. <br />
                    REMOVE EXCESS OIL,DIRT AND DEAD TISSUES FROM SKIN. IT
                    CONTAINS NEEM,TULASI,CHANDAN,MULETHI,MULTANI MITTI <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/acne_skin.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2 className="mb-4"> Anti Hairfall </h2>
                  <div className="text-center px-5 text-uppercase ">
                    Enriched With the power of ritha, shikakai, amla,
                    kapoorkachari and NAGERMOTHA, METHI ayurvedic herbs Reduce
                    hair fall,repair damage hair.Make your hair smooth and silky
                    by deep cleanning<br/>
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/anti_hairfall1.jpg"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Bath Powder </h2>
                  <div className="text-center px-5 text-uppercase ">
                    Enriched With the power of ritha, shikakai, amla,
                    kapoorkachari and NAGERMOTHA, METHI ayurvedic herbs Reduce
                    hair fall,repair damage hair.Make your hair smooth and silky
                    by deep cleanning <br/>
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/bath_powder3.jpg"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Anti Dandruff </h2>
                  <div className="text-center px-5 text-uppercase ">
                    PROTECTS YOUR SKIN FROM HARMFUL CHEMICAL BASED SOAPS AND
                    BATH SALTS. BENEFICIAL FOR FUNGUS ,ITCHY DEAD SKIN AND GIVES
                    DAZZELING GLOW TO YOUR SKIN.IMPROVES SKIN IMMUNITY TO FIGHT
                    ANAINST VIRUSES POLLUTION WITH THE GOODNESS OF ORANGE
                    PEELPOWDER ,CHANDAN,GULAB ,NEEM,AMAHALDI,MULTANI MITTI
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/antidandruff_powder/info 3.jpg"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Glowing Face Pack </h2>
                  <div className="text-center px-5 text-uppercase ">
                    PROVIDES YOUR SKIN A HEALTHY,SOOTHING AND GLOWING EFFECT BY
                    THE GOODNESS OF ROSE, CHANDAN,MULETHI,MANJISHTHA,SARIVA THIS
                    IS HANDMADE PRODUCT MADE BY USING AUTHENTIC AYURVEDIC
                    PROCESS
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/glowing3.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Hair Conditioning </h2>
                  <div className="text-center px-5 text-uppercase ">
                    CONVERTS DRY AND FRIZZY HAIR INTO SMOOTH AND SILKY WITH THE
                    POWDER OF HIBISCUS,AMLA,ALOE VERA,BHRUNGARAJ THIS IS
                    HANDMADE PRODUCT MADE USING AUTHENTIC AYURVEDIC PROCESS
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/hair_conditioning.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Hair Dye </h2>
                  <div className="text-center px-5 text-uppercase ">
                    ENRICHED WITH HEENA POWDER AND INDIGO POWDER Converts grey
                    and white hair into coffee brown AND BLACK Long lasting
                    colour and shine,makes hair thicker and lusturous
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/hair_dye.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Hair Oil </h2>
                  <div className="text-center px-5 text-uppercase ">
                    Proceed by authentic ayurvedic process. All hair nurishment
                    ayurvedic herbs processed Into cold press coconut oil and
                    sesame oil Provids deep nurishment by coconut milk.as you
                    all know coconut is superfood for Hair amla is helpful for
                    hair regrowth Hibiskus repair damage hair
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/hair_oil.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Hair Nourishment </h2>
                  <div className="text-center px-5 text-uppercase ">
                    MAKE HAIR THICKER AND,LUSTUROUS BY PROVIDING DEEP NURISHMENT
                    PREVENTS HAIR FALL,MAKES YOUR HAIR STRONG BY JASWAND, AMALA,
                    TRIFALA, BHRUNGARAJ, BRAMHI, JATAMANSI
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/hair_nourishment/nourishment.jpg"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Pain Relief Oil </h2>
                  <div className="text-center px-5 text-uppercase ">
                    RELIEVES ALL TYPES OF BODY PAIN LIKE MUSCLE PAIN,JOINT
                    PAIN,CERVICAL PAIN,BACK PAIN,MUSCLE SPRAIN.
                    DHATURA,ERANDA,ARKA,GULVEL,SHEVAGA,NIRGUNDI FRESH LEAF JUICE
                    IS PROCSSED INTO MUSTERD OIL AND SEASAM OIL.
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/pain_oil2.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Pigmentation </h2>
                  <div className="text-center px-5 text-uppercase ">
                    TREATS DEEP TANNING AND PIGMENTATION MINIMIZE DARK
                    SPOTS,SCAR MARKS,HELPS IN PROTECTING SKIN FROM HARMFUL UV
                    RAYS BY THE POWER OF
                    MANJISHTHA,MULETHI,TRIPHALA,TURMERIC,GULAB AND CHANDAN THIS
                    IS HANDMADE PRODUCT USING AUTHENTIC AYURVEDIC PROCESS
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/pigmentation.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Moisturizing Cream / Shatadhouta Ghrita </h2>
                  <div className="text-center px-5 text-uppercase ">
                    ANTIAEGING CREAM,ANTIWRINKLE CREAM,SUNSCREEN CREAM PURE COW
                    GHEE IS WASHED BY 100 TIMES BY AUTHENTIC AYURVEDIC
                    PROCESS.BY ITS COOLING PROPERTIES IT PROTECTS OUR SKIN FROM
                    HARMFUL UV RAYS ,WORKS AS SUNSCREEN CREAM, COW GHEE IS WORK
                    AS ANTIAEGING ,ANTIWRINKLE,AND AS A DAILY MOISTURIZER.
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/shatadhouta_ghrita4.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Skin Tightning </h2>
                  <div className="text-center px-5 text-uppercase ">
                    HELPS TO REDUCE AGEING BY TIGHTENING LOOSE SKIN. BY THE
                    PROPERTIESE OF LODHRA,TRIPHALA,CHANDAN,MULETHI THIS IS
                    PURELY HANDMADE PRODUCT MADE USING AUTHENTIC AYURVEDIC
                    PROCESS
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/tightning3.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> Ubtan </h2>
                  <div className="text-center px-5 text-uppercase ">
                    EXPERIENCE A REJUVENATING,AROMATIC HOLY BATH FEEL HOLY
                    EXPERIENCE ON FESTIVAL OCCASION FOR BEST FEELING YOU CAN USE
                    REGULARLY
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/carousel/ubatan1.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> COMPLETE HAIR FALL CONTROL KIT </h2>
                  <div className="text-center px-5 text-uppercase ">
                    1. ANTIHAIR FALL HAIR OIL <br />
                    2. HAIR NURISHMENT HAIR PACK
                    <br />
                    3. ANTI HAIRFALL SHAMPOO POWDER <br />
                    4. HAIR CONDITIONING MASK POWDER
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/combo/HAIRFALLCONTROL_COMBO/3.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> COMPLETE DANDRUFF SOLUTION KIT</h2>
                  <div className="text-center px-5 text-uppercase ">
                    1. ANTI-DANDRUFF POWDER
                    <br />
                    2. ANTI-HAIRFALL SHAMPOO POWDER
                    <br />
                    3. HAIR OIL
                    <br />
                    4. HAIR CONDITIONING MASK POWDER <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/combo/ANTI_DANDRUFF_COMBO/2.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2> COMPLETE HAIR CONDITIONING KIT</h2>
                  <div className="text-center px-5 text-uppercase ">
                    1. HAIR CONDITIONER MASK POWDER <br />
                    2. HAIR NURISHMENT POWDER
                    <br />
                    3. HAIR OIL
                    <br />
                    4. HAIR SOFTING SHAMPOO POWDER
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/combo/HAIR_CONDITIONING_KIT/b2.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="carousel-caption d-none d-md-block w-50 float-start">
                  <h2>COMPLETE FACE PACK COMBO </h2>
                  <div className="text-center px-5 text-uppercase ">
                    1.FACE PACK FOR EXTRAGLOWING SKIN-PROVIDES HEALTHY GLOWING
                    EFFECT <br />
                    2.FACE PACK FOR HYPERPIGMENTATION AND DARK SPOTS-TREATS DEEP
                    TANNING PIGMENTATION
                    <br />
                    3.FACE PACK FOR ACNE AND SKIN INFECTION-REDUCE PIMPLES AND
                    SKIN INFECTION,REMOVE EXCESS OIL,DIRT AND DEAD TISSUES FROM
                    SKIN
                    <br />
                    4.FACE PACK FOR SKIN TIGHTENING-HELPS TO REDUCE AEGING BY
                    TIGHTENING LOOSE SKIN
                    <br />
                    <button className="btn btn-success my-3">
                      <Link to="/testimonal">
                        <strong className="text-white">See More</strong>
                      </Link>
                    </button>
                  </div>
                </div>
                <img
                  src="images/combo/FACKPACK_COMBO/2.png"
                  className="d-block float-end"

                  style={{ height: "300px", width:"30%" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carausal;
