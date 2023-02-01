// import React, { useState, useEffect } from "react";
// import { getData, filterData } from "./service";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { buttons } from "./data";
import { getData, filterData } from "./service";

export default function Pokymon() {
  
  const [filtred, setFiltred] = useState(null);
  useEffect(() => {
    setFiltred(getData());
  }, []);

  function handleFilter(e) {
    let typeProduct = e.target.value;
    typeProduct !== "all"
      ? setFiltred(filterData(typeProduct))
      : setFiltred(getData());
  }

  return (
    <div className="p-5">
      {buttons &&
        buttons.map((type, i) => (
          <>
            <button
              className="mx-1 btn border border-1"
              key={i}
              value={type.value}
              onClick={handleFilter}
            >
              {type.name}
            </button>
          </>
        ))}
      <div className="row mt-3">
        {filtred &&
          filtred.map((type,i) => (
            <div key={i} className="col-lg-3 col-sm-6 my-3">
              <div className="card h-100">
                <Link to={`${type.id}`}>
                <img
                  src={type.img}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "300px" }}
                />
                </Link>
                <div className="position-relative card-body product">
                  <h5 style={{ fontWeight: "bold" }}>{type.nome}</h5>

                  <p>
                    <s>₹{type.cut_rupee}/-</s>
                    <i className="fa fa-inr h6" aria-hidden="true"></i>
                    {type.rupee} {type.gm} ( {type.off}% off )
                  </p>
                  <p>{type.footer}</p>
                  <a
                    className="position-absolute"
                    href={type.a}
                  >
                    
                    <button className="btn btn-outline-success">
                      Know More...
                    </button>
                  </a>
                </div>
                <div className="card-footer bg-success">
                  <a
                    href="https://wa.me/918208787115?text=I%20Want%20To%20Buy%20Hair%20Conditioning%20Mask"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <small className="text-white" style={{ fontSize: "19px" }}>
                      Chat On Whatsapp
                      <span>
                        <i
                          className="fa fa-whatsapp"
                          aria-hidden="true"
                          style={{
                            fontSize: "19px",
                            position: "relative",
                            left: "12px",
                          }}
                        ></i>
                      </span>
                    </small>
                  </a>
                </div>
              </div>

              {/* <li>{type.nome}</li>
            <li>{type.CP}</li> */}
            </div>
          ))}
      </div>
    </div>
  );
}
