import React from "react";


const ExternalRedirect = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <i
        onClick={() =>
          openInNewTab(
            "https://www.facebook.com/Nisarg-Ayurveda-106407377478681"
          )
        }
        className="fa fa-facebook m-1"
      ></i>
      <i
        onClick={() => openInNewTab("https://twitter.com/KelwadeMegha")}
        className="fa fa-twitter m-1"
      ></i>
      <i
        onClick={() =>
          openInNewTab("https://www.instagram.com/nisarga_ayurveda")
        }
        className="fa fa-instagram m-1"
      ></i>
      <i
        onClick={() =>
          openInNewTab(
            "https://www.youtube.com/channel/UCz3QhGIglERICrYxzxattWw"
          )
        }
        className="fa fa-youtube m-1"
      ></i>
      <i
        onClick={() =>
          openInNewTab(
            "https://www.amazon.in/s?k=Nisarga+Ayurveda&ref=bl_dp_s_web_0"
          )
        }
        className="fa fa-amazon m-1"
      ></i>
      <i
        onClick={() =>
          openInNewTab(
            "https://www.indiamart.com/nisarga-ayurveda/?pos=1&kwd=nisarga%20ayurveda&tags=||||8186.624|Price|product"
          )
        }
      >
        <img src={'../images/india_mart.jpg'} alt="" className="india m-1" />
      </i>
    </div>
  );
};

export default ExternalRedirect;
