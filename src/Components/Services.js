import React, { useState } from "react";
import ServiceApi from "../API/ServiceApi";

const Services = () => {
  const [apiData, setData] = useState(ServiceApi);
  return (
    <>
      <section className="service-main-section">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold mb-5">
            How to Send Money
          </h1>
          <div className="row">
          {apiData.map((infoData) => {
            const { id, logo, title, info } = infoData;
            return (
              <>
                
                  <div className="col-11 col-lg-4 col-xxl-4 service-container-child" key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-Heading text-center mb-2">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
               
              </>
            );
          })}
           </div>
        </div>
      </section>
    </>
  );
};

export default Services;
