
import { useSpring, animated } from "@react-spring/web";

const AboutSection = () => {
  function Number({ n }: { n: number }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 2, tension: 20, friction: 20 },
    });
    return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
  }

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>About Us</h3>
              <p>
                ISO Certified 9001:2015 <br /> Vision to provide highest quality
                components to global clients.
              </p>
              <ul>
                <li>
                  <i className="bx bx-check-double"></i> High-Quality precision
                  components.
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Cost-Effective
                  solutions & On-Time Delivery
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Prioritize safety and
                  environmental conservation.
                </li>
              </ul>
              <div className="row icon-boxes">
                <div className="col-md-6">
                  <i className="bx bx-receipt"></i>
                  <h4>Our Facility</h4>
                  <p>
                    Facility equipped with Sliding Head, Traub, Drill Machine,
                    Taping Machine, and CNC Machines.
                  </p>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Certified Quality</h4>
                  <p>
                    Processes , Functions and Quality comply with ISO 9001:2015
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  <Number n={232} />
                </span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  <Number n={521} />
                </span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  <Number n={1463} />
                </span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="18"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  <Number n={18} />
                </span>
                <p>Dedicated Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
