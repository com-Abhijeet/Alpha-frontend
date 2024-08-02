import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Enquire from "../components/Enquire";

const Portfolio = () => {
  const [showEnquire, setShowEnquire] = useState(false);
  const [productName, setProductName] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && showEnquire) {
      const enquireSection = document.getElementById("enquire");
      if (enquireSection) {
        enquireSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isMobile, showEnquire]);

  const handleMoreDetailsClick = (name: string) => {
    setProductName(name);
    setShowEnquire(true);
  };
  return (
    <>
      <Navbar />
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Explore our diverse range of precision components and services
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-shop-floor">Shop Floor</li>
                <li data-filter=".filter-vmc-machine">VMC Machine</li>
                <li data-filter=".filter-products">Products</li>
                <li data-filter=".filter-equipments">
                  Technical Support Equipment
                </li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-shop-floor wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="././assets/img/portfolio/sho-floor.png"
                    className="img-fluid"
                    alt=""
                  />
                  <a
                    href="Alpha-frontend/./assets/img/portfolio/sho-floor.png"
                    data-gallery="portfolioGallery"
                    className="link-preview portfolio-lightbox"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="">Shop Floor 1</Link>
                  </h4>
                  <p>Shop Floor</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-vmc-machine wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/vmc.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/vmc.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("VMC Machine")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("VMC machine")}
                    >
                      VMC Machine 1
                    </Link>
                  </h4>
                  <p>VMC Machine</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-1.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-1.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Transmission Shaft")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() =>
                        handleMoreDetailsClick("Transmission Shaft")
                      }
                    >
                      Transmission Shaft
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-2.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-2.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick(`2" lower Body`)}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick(`2" Lower Body`)}
                    >
                      2" Lower Body
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-3.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-3.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Bonnet")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Bonnet")}
                    >
                      Bonnet
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-4.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-4.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Turning Fork")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Turning Fork")}
                    >
                      Turning Fork
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-5.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-5.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Locking Screw")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Locking Screw")}
                    >
                      Locking Screw
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-6.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-6.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Stem Adapter")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Stem Adapter")}
                    >
                      STEM Adapter
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-7.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-7.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() =>
                      handleMoreDetailsClick("Piston Sphere & Cup")
                    }
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() =>
                        handleMoreDetailsClick("Piston Sphere & Cup")
                      }
                    >
                      Piston Sphere & cup
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-8.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-8.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Roller")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Roller")}
                    >
                      Roller
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-9.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-9.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Anti-Rattle Ring")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Anti Rattle Ring")}
                    >
                      Anti-Rattle Ring
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-10.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-10.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Flange Ring")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Flange Ring")}
                    >
                      Flange Ring
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-products wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/product-11.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/product-11.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Pinion Shaft")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Pinion Shaft")}
                    >
                      pinion Shaft
                    </Link>
                  </h4>
                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-equipments wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/Tech-supp-1.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/Tech-supp-1.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Digital Caliper")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Digital Caliper")}
                    >
                      Digital Caliper
                    </Link>
                  </h4>
                  <p>Technical Support Equipment</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-equipments wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/Tech-supp-2.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/Tech-supp-2.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() =>
                      handleMoreDetailsClick("Vernier Height Gauge")
                    }
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() =>
                        handleMoreDetailsClick("Vernier Height Gauge")
                      }
                    >
                      Verinier Height Gauge
                    </Link>
                  </h4>
                  <p>Technical Support Equipment</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-equipments wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/Tech-supp-3.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/Tech-supp-3.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() =>
                      handleMoreDetailsClick("Digital Weighing Scale")
                    }
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() =>
                        handleMoreDetailsClick("Digital Weighing Scale")
                      }
                    >
                      Digital Weighing Scale
                    </Link>
                  </h4>
                  <p>Technical Support Equipment</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-equipments wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/Tech-supp-4.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/Tech-supp-4.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("MicroMeter")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("MicroMeter")}
                    >
                      MicroMeter
                    </Link>
                  </h4>
                  <p>Technical Support Equipment</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-equipments wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/Tech-supp-5.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/Tech-supp-5.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to=""
                    className="link-details"
                    title="Enquire"
                    onClick={() => handleMoreDetailsClick("Depth Vernier")}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() => handleMoreDetailsClick("Depth Vernier")}
                    >
                      Depth Vernier
                    </Link>
                  </h4>
                  <p>Technical Support Equipment</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-equipments wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="./assets/img/portfolio/Tech-supp-6.png"
                    className="img-fluid"
                    alt=""
                  />
                  <Link
                    to="./assets/img/portfolio/Tech-supp-6.png"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Preview"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                  <Link
                    to="#"
                    className="link-details"
                    title="Enquire"
                    onClick={() =>
                      handleMoreDetailsClick(
                        "Mitutoyo Surface Roughness Tester"
                      )
                    }
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link
                      to=""
                      onClick={() =>
                        handleMoreDetailsClick(
                          "Mitutoyo Surface Roughness Tester"
                        )
                      }
                    >
                      Mitutoyo Surface Roughness Tester
                    </Link>
                  </h4>
                  <p>Technical Support Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isMobile && showEnquire && <Enquire productName={productName} />}
      {showEnquire && !isMobile && (
        <div className="enquire-overlay">
          <Enquire productName={productName} />
          <button
            className="enquire-overlay-button"
            onClick={() => setShowEnquire(false)}
          >
            Close
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Portfolio;
