import React, { useEffect, useState } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gotTobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <div>
        {isVisible && (
      <div
        className="back-to-top mt-4"
        style={{ display: "inline" }}
        id="btn-back-to-top"
        onClick={gotTobtn}

      >
        <i className="fa fa-chevron-up"></i>
      </div>
      )}
    </div>
  );
};

export default GoToTop;
