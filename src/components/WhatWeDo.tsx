

const WhatWeDo = () => {
  return (
    <>
      <section id="what-we-do" className="what-we-do">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <p>
              Alpha Enterprises is a Manufacturer and Service Provider for
              Premium Quality Precision Components.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a>Manufacturing</a>
                </h4>
                <p>
                  We manufacture precision components for Automotive, Oil and
                  Gas, and Hydraulic industries.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4>
                  <a>Customization</a>
                </h4>
                <p>
                  Products can be customized as per the specification provided
                  by Clients.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a>Job Work Supplier</a>
                </h4>
                <p>
                  We cater to various industries as a job work supplier with
                  material procured from well-known vendors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
