import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg order-last">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For you
              </h1>
              <p className="main-heo-para">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
              </p>
              <h3>Get Early excess for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get It Now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center 
            main-hero-section-images order-md-first order-sm-first">
              <img
                className="img-fluid"
                src="/images/windows.jpg"
                alt="hero-image"
              />
              <img
                className="img-fluid main-hero-img2"
                src="/images/adomas.jpg"
                alt="hero-image"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
