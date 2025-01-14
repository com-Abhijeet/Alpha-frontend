import React, { useState, useEffect, useRef, useMemo } from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";
import Enquire from "../components/Enquire";
import Process from "../components/Process";
import ScrollAnimation from "react-animate-on-scroll";
import TechnicalSupportEquipment from "../components/TechnicalSupportEquipment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Portfolio: React.FC = () => {
  /*
  STATE VARIABLES
  */
  const [activeFilter, setActiveFilter] = useState(
    "filter-industrial-machines"
  );
  const [filteredItems, setFilteredItems] = useState<
    { id: number; imgSrc: string; title: string; type: string }[]
  >([]);
  const [showEnquire, setShowEnquire] = useState(false);
  const [productName, setProductName] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const portfolioRef = useRef<HTMLDivElement>(null);

  /*
  Handle Responsiveness
  */

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (portfolioRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = portfolioRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          document.body.classList.add("stuck");
          setTimeout(() => {
            document.body.classList.remove("stuck");
          }, 1000); // Adjust the duration as needed
        }
      }
    };

    const portfolioElement = portfolioRef.current;
    if (portfolioElement) {
      portfolioElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (portfolioElement) {
        portfolioElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [portfolioRef]);

  /*
  Enquiry Details Event 
  */
  const handleMoreDetailsClick = (name: string) => {
    setProductName(name);
    setShowEnquire(true);

    ReactGA.event({
      action: `Enquire for ${productName}`,
      category: "Enquiry",
      label: `${productName}`,
      value: 1,
    });
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  /*
  Portfolio Object Array
  */
  const portfolioData: {
    [key: string]: {
      id: number;
      imgSrc: string;
      title: string;
      type: string;
    }[];
  } = {
    "filter-shop-floor": [
      {
        id: 1,
        imgSrc: "/img/portfolio/shop-floor1.png",
        title: "Shop Floor 1",
        type: "Shop Floor",
      },
      {
        id: 2,
        imgSrc: "/img/portfolio/shop-floor2.png",
        title: "Shop Floor 2",
        type: "Shop Floor",
      },
    ],
    "filter-industrial-machines": [
      {
        id: 3,
        imgSrc: "/img/portfolio/vmc-machine1.png",
        title: "VMC Machine 1",
        type: "Industrial Equipment",
      },
      {
        id: 4,
        imgSrc: "/img/portfolio/industrial-machine2.png",
        title: "Machine 2",
        type: "Industrial Equipment",
      },
      {
        id: 17,
        imgSrc: "/img/portfolio/tsugami-machine.JPG",
        title: "Tsugami B0325",
        type: "Industrial Equipment",
      },
      {
        id: 18,
        imgSrc: "/img/portfolio/lathe-machine.JPG",
        title: "Lathe Machine",
        type: "Industrial Equipment",
      },
      {
        id: 19,
        imgSrc: "/img/portfolio/t5-machine.JPG",
        title: "T5 Machine",
        type: "Industrial Equipment",
      },
      {
        id: 19,
        imgSrc: "/img/portfolio/lathe-machine2.png",
        title: "Lathe Machine",
        type: "Industrial Equipment",
      },
      {
        id: 20,
        imgSrc: "/img/portfolio/smt-aldell.JPG",
        title: "SMT Aldell",
        type: "Industrial Equipment",
      },
      {
        id: 20,
        imgSrc: "/img/portfolio/singer-machine.JPG",
        title: "Singer Milling 27",
        type: "Industrial Equipment",
      },
    ],
    "filter-products": [
      {
        id: 5,
        imgSrc: "/img/portfolio/product1.png",
        title: "Transmission Shaft",
        type: "Products",
      },
      {
        id: 6,
        imgSrc: "/img/portfolio/product2.png",
        title: `2" Lower Body`,
        type: "Products",
      },
      {
        id: 7,
        imgSrc: "/img/portfolio/product3.png",
        title: "Bonnet",
        type: "Products",
      },
      {
        id: 8,
        imgSrc: "/img/portfolio/product4.png",
        title: "Turning Fork",
        type: "Products",
      },
      {
        id: 9,
        imgSrc: "/img/portfolio/product5.png",
        title: "Locking Screw",
        type: "Products",
      },
      {
        id: 10,
        imgSrc: "/img/portfolio/product6.png",
        title: "Stem Adapter",
        type: "Products",
      },
      {
        id: 11,
        imgSrc: "/img/portfolio/product7.png",
        title: "Piston, Sphere & Cup",
        type: "Products",
      },
      {
        id: 12,
        imgSrc: "/img/portfolio/product8.png",
        title: "Roller",
        type: "Products",
      },
      {
        id: 13,
        imgSrc: "/img/portfolio/product9.png",
        title: "AntiRattle Ring",
        type: "Products",
      },
      {
        id: 14,
        imgSrc: "/img/portfolio/product10.png",
        title: "Flange Ring",
        type: "Products",
      },
      {
        id: 15,
        imgSrc: "/img/portfolio/product11.png",
        title: "Pinion Shaft",
        type: "Products",
      },
      {
        id: 16,
        imgSrc: "/img/portfolio/product12.png",
        title: "Gear",
        type: "Products",
      },
      {
        id: 21,
        imgSrc: "/img/portfolio/custom-parts.JPG",
        title: "Custom Parts",
        type: "Products",
      },
      {
        id: 22,
        imgSrc: "/img/portfolio/custom-parts2.JPG",
        title: "Custom Parts",
        type: "Products",
      },
    ],
  };

  const allItems = useMemo(() => {
    return Object.values(portfolioData).flat();
  }, []);

  useEffect(() => {
    const items =
      activeFilter === "*" ? allItems : portfolioData[activeFilter] || [];
    setFilteredItems(items);
  }, [activeFilter, allItems, portfolioData]);

  return (
    <div id="root">
      <Navbar />
      <div className="main-content">
        <section id="portfolio" className="portfolio" ref={portfolioRef}>
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
                  <li
                    data-filter="*"
                    className={activeFilter === "*" ? "filter-active" : ""}
                    onClick={() => handleFilterClick("*")}
                  >
                    All
                  </li>
                  <li
                    data-filter=".filter-shop-floor"
                    className={
                      activeFilter === "filter-shop-floor"
                        ? "filter-active"
                        : ""
                    }
                    onClick={() => handleFilterClick("filter-shop-floor")}
                  >
                    Shop Floor
                  </li>
                  <li
                    data-filter=".filter-industrial-machines"
                    className={
                      activeFilter === "filter-industrial-machines"
                        ? "filter-active"
                        : ""
                    }
                    onClick={() =>
                      handleFilterClick("filter-industrial-machines")
                    }
                  >
                    Industrial Equipment
                  </li>
                  <li
                    data-filter=".filter-products"
                    className={
                      activeFilter === "filter-products" ? "filter-active" : ""
                    }
                    onClick={() => handleFilterClick("filter-products")}
                  >
                    Products
                  </li>
                </ul>
              </div>
            </div>
            <div className="row portfolio-container">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`col-lg-4 col-md-6 portfolio-item ${item.type
                    .toLowerCase()
                    .replace(/\s+/g, "-")} wow fadeInUp`}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src={item.imgSrc}
                        className="img-fluid-portfolio"
                        alt={item.title}
                        loading="lazy"
                      />
                      <Link
                        to={item.imgSrc}
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
                        onClick={() => handleMoreDetailsClick(item.title)}
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </figure>
                    <div className="portfolio-info">
                      <h4>
                        <Link
                          to=""
                          onClick={() => handleMoreDetailsClick(item.title)}
                        >
                          {item.title}
                        </Link>
                      </h4>
                      <p>{item.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ScrollAnimation
          animateIn="slideInUp"
          duration={1}
          animateOnce
          animateOut="slideOutUp"
        >
          {""}
          <TechnicalSupportEquipment />
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="slideInUp"
          duration={1}
          animateOnce
          animateOut="slideOutUp"
        >
          {""}
          <Process />
        </ScrollAnimation>

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
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
