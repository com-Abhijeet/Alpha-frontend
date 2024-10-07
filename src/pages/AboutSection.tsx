import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PieChartComponent from "../components/PieChart";
import Table from "../components/Table";

const AboutSection = () => {
  return (
    <>
      <Navbar />
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            {" "}
            <h2>About Us</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <img src="/about.jpg" className="img-fluid" alt="About Us" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                We are Alpha Enterprises, where innovation meets precision. With
                over 35 years of excellence in the manufacturing industry, we
                have become a trusted partner to some of the most dynamic
                sectors, including the automotive industry. Our journey has been
                defined by a relentless pursuit of quality, innovation, and
                customer success.
              </p>
              <ul>
                <li>
                  <i className="bx bx-cog"></i>
                  <span className="about-bullet-highlights">
                    High-Quality
                  </span>{" "}
                  precision components.
                </li>
                <li>
                  <i className="bx bx-dollar-circle"></i>{" "}
                  <span className="about-bullet-highlights">
                    Cost-Effective
                  </span>{" "}
                  solutions & On-Time Delivery.
                </li>
                <li>
                  <i className="bx bx-shield"></i>
                  <span className="about-bullet-highlights">
                    Prioritize safety
                  </span>{" "}
                  and environmental conservation.
                </li>
                <li>
                  <i className="bx bx-wrench"></i>Equipped with
                  <span className="about-bullet-highlights">
                    {" "}
                    state-of-the-art machinery
                  </span>{" "}
                  and cutting-edge technology.
                </li>
                <li>
                  <i className="bx bx-layer"></i> Capable of handling a
                  <span className="about-bullet-highlights">
                    {" "}
                    wide range of operations{" "}
                  </span>
                  in a single setup.
                </li>
                <li>
                  <i className="bx bx-award"></i>
                  Deliver products that are synonymous with{" "}
                  <span className="about-bullet-highlights">excellence.</span>
                </li>
                <li>
                  <i className="bx bx-trophy"></i>
                  Reputation for tackling the most demanding projects with{" "}
                  <span className="about-bullet-highlights">
                    confidence and skill.
                  </span>
                </li>
                <li>
                  <i className="bx bx-check-shield"></i>
                  <span className="about-bullet-highlights">
                    {" "}
                    Commitment to quality{" "}
                  </span>{" "}
                  remains unwavering.
                </li>
                <li>
                  <i className="bx bx-group "></i>
                  Building{" "}
                  <span className="about-bullet-highlights">
                    long-term partnerships{" "}
                  </span>
                  with our clients.
                </li>
                <li>
                  <i className="bx bx-line-chart"></i>
                  Helping clients
                  <span className="about-bullet-highlights">
                    {" "}
                    overcome challenges and grow{" "}
                  </span>
                  their businesses.
                </li>
                <li>
                  <i className="bx bx-globe"></i>
                  <span className="about-bullet-highlights"></span> Mission to
                  be a leader in precision manufacturing and a steadfast ally to
                  industries across India and beyond.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Table />
      <PieChartComponent />
      <Footer />
    </>
  );
};

export default AboutSection;
