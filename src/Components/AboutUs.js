import React, { useState } from "react";
import howToUseApp from "../API/HowToUseApp";

const AboutUs = () => {
  const [data, setData] = useState(howToUseApp);
  return (
    <>
      <section>
        <div className="container About-container">
          <div className="row">
            <div className="col-12 col-lg-5 text-center left-side-about order-sm-1 order-md-1">
              <img
                className="img-fluid"
                src="./images/jorge.jpg"
                alt="AboutImage"
              ></img>
            </div>
            <div className="col-12 col-lg-7 right-side-about order-sm-2 order-md-2">
              <h1 className="main-heading">How to use App?</h1>
              <div className="row about-section-info">
                {data.map((eachElm) => {
                  const { id, info, title } = eachElm;
                  return (
                    <>
                    <div className="row">
                      <div className="col-2 about-section-number" key={id}>{id}</div>
                      <div className="col-10 about-section-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <br />
              <button className="btn-style btn-style-border mx-auto">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
