import Footer from "../components/Footer";
import Map from "../components/Map";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
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
                  <a>Precision Manufacturing</a>
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
                  <a>Customization</a>
                </h4>
                <p>
                  Our products can be tailored to meet the specific needs of our
                  clients.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-box-seam"></i>
                <h4>
                  <a>Flexible Material Sourcing</a>
                </h4>
                <p>
                  We offer flexible material sourcing options, whether utilizing
                  our own high-quality materials or working with
                  customer-supplied materials for job work.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-shield-check"></i>
                <h4>
                  <a>Quality Control</a>
                </h4>
                <p>
                  We maintain rigorous quality control to ensure that every
                  product meets exacting specifications.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-car-front"></i>
                <h4>
                  <a>Automotive Industry</a>
                </h4>
                <p>
                  Our contributions to the automobile industry and other sectors
                  over the past three decades highlight our ability to solve
                  complex engineering problems while delivering exceptional
                  value.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-rocket"></i>
                <h4>
                  <a>Innovation and Quality</a>
                </h4>
                <p>
                  Our commitment to innovation, cost-efficiency, and quality
                  makes us the ideal partner for businesses looking to scale and
                  excel in highly competitive environments.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-globe"></i>
                <h4>
                  <a>Global Reach</a>
                </h4>
                <p>
                  Whether you're based in Pune, Mumbai, Aurangabad, or across
                  India and globally, we don't just meet expectations—we exceed
                  them.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-people"></i>
                <h4>
                  <a>Client Empowerment</a>
                </h4>
                <p>
                  By combining cutting-edge technology with unparalleled
                  expertise, we empower our clients to achieve their goals and
                  drive sustainable growth.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-headset"></i>
                <h4>
                  <a>Customer Support</a>
                </h4>
                <p>
                  We provide exceptional customer support to ensure our clients
                  have the assistance they need at every stage of their project.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="icon-box">
                <i className="bi bi-lightbulb"></i>
                <h4>
                  <a>Research and Development</a>
                </h4>
                <p>
                  Our dedicated R&D team continuously works on innovative
                  solutions to meet the evolving needs of our clients and stay
                  ahead in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Map />
      <Footer />
    </>
  );
};

export default Services;
