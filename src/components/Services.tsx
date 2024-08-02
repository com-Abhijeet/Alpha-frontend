import React from "react";

const Services = () => {
  return (
    <>
      <section id="services" className="services section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Alpha Enterprises offers various services in the manufacturing and
              job work supply sectors.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="icon-box">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <a >Precision Manufacturing</a>
                </h4>
                <p>
                  We manufacture high-quality precision components for various
                  industries.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-lg-0">
              <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <h4>
                  <a >Customization</a>
                </h4>
                <p>
                  Our products can be tailored to meet the specific needs of our
                  clients.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-bar-chart"></i>
                <h4>
                  <a >Job Work Supplier</a>
                </h4>
                <p>
                  We provide job work services with materials procured from
                  reputable vendors.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-binoculars"></i>
                <h4>
                  <a>Quality Assurance</a>
                </h4>
                <p>
                  We adhere to strict quality control measures to ensure the
                  highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Services;
