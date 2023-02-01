import React from "react";


const Head = () => {
  const mar = {
    color: "#e4bb85",
  };
  const marquees = {
    backgroundColor: "#44ba48",
    padding: "10px 0",
    fontWeight: "700",
  };

  return (
    <>
   
      <div className="container-fluid">
        <div className="row">
          <marquee style={marquees} direction="left">
            <span style={mar}> Nisarga Ayurveda Provides Best Quality </span>{" "}
            Products <span style={mar}> | </span> Treatment{" "}
            <span style={mar}> | </span> Services{" "}
            <span style={mar} className="ml-5">
              {" "}
              Free Online Consultation For Selection Of Skin And Hair Care
              Products{" "}
            </span>
          </marquee>
          
        </div>
      </div>
    </>
  );
};
export default Head;
