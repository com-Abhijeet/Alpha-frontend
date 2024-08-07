import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Enquire from "../components/Enquire";
import Footer from "../components/Footer";
import Process from "../components/Process";

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [filteredItems, setFilteredItems] = useState<
    { id: number; imgSrc: string; title: string; type: string }[]
  >([]);
  const [showEnquire, setShowEnquire] = useState(false);
  const [productName, setProductName] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (portfolioRef.current) {
  //       const { scrollTop, scrollHeight, clientHeight } = portfolioRef.current;
  //       if (scrollTop + clientHeight >= scrollHeight) {
  //         document.body.classList.add("stuck");
  //         setTimeout(() => {
  //           document.body.classList.remove("stuck");
  //         }, 1000); // Adjust the duration as needed
  //       }
  //     }
  //   };

  //   const portfolioElement = portfolioRef.current;
  //   if (portfolioElement) {
  //     portfolioElement.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (portfolioElement) {
  //       portfolioElement.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, [portfolioRef]);

  const handleMoreDetailsClick = (name: string) => {
    setProductName(name);
    setShowEnquire(true);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

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
    ],
    "filter-products": [
      {
        id: 5,
        imgSrc: "/img/portfolio/product1.png",
        title: "Products 1",
        type: "Products",
      },
      {
        id: 6,
        imgSrc: "/img/portfolio/product2.png",
        title: "Products 2",
        type: "Products",
      },
      {
        id: 7,
        imgSrc: "/img/portfolio/product3.png",
        title: "Products 3",
        type: "Products",
      },
      {
        id: 8,
        imgSrc: "/img/portfolio/product4.png",
        title: "Products 4",
        type: "Products",
      },
      {
        id: 9,
        imgSrc: "/img/portfolio/product5.png",
        title: "Products 5",
        type: "Products",
      },
      {
        id: 10,
        imgSrc: "/img/portfolio/product6.png",
        title: "Products 6",
        type: "Products",
      },
      {
        id: 11,
        imgSrc: "/img/portfolio/product7.png",
        title: "Products 7",
        type: "Products",
      },
      {
        id: 12,
        imgSrc: "/img/portfolio/product8.png",
        title: "Products 8",
        type: "Products",
      },
      {
        id: 13,
        imgSrc: "/img/portfolio/product9.png",
        title: "Products 9",
        type: "Products",
      },
      {
        id: 14,
        imgSrc: "/img/portfolio/product10.png",
        title: "Products 10",
        type: "Products",
      },
      {
        id: 15,
        imgSrc: "/img/portfolio/product11.png",
        title: "Products 11",
        type: "Products",
      },
      {
        id: 16,
        imgSrc: "/img/portfolio/product12.png",
        title: "Products 12",
        type: "Products",
      },
      {
        id: 23,
        imgSrc: "/img/portfolio/product13.png",
        title: "Products 13",
        type: "Products",
      },
    ],
    "filter-equipments": [
      {
        id: 17,
        imgSrc: "/img/portfolio/equipment1.png",
        title: "Technical Support Equipment 1",
        type: "Technical Support Equipment",
      },
      {
        id: 18,
        imgSrc: "/img/portfolio/equipment2.png",
        title: "Technical Support Equipment 2",
        type: "Technical Support Equipment",
      },
      {
        id: 19,
        imgSrc: "/img/portfolio/equipment3.png",
        title: "Technical Support Equipment 3",
        type: "Technical Support Equipment",
      },
      {
        id: 20,
        imgSrc: "/img/portfolio/equipment4.png",
        title: "Technical Support Equipment 4",
        type: "Technical Support Equipment",
      },
      {
        id: 21,
        imgSrc: "/img/portfolio/equipment5.png",
        title: "Technical Support Equipment 5",
        type: "Technical Support Equipment",
      },
      {
        id: 22,
        imgSrc: "/img/portfolio/equipment6.png",
        title: "Technical Support Equipment 6",
        type: "Technical Support Equipment",
      },
      {
        id: 24,
        imgSrc: "/img/portfolio/equipment7.png",
        title: "Technical Support Equipment 7",
        type: "Technical Support Equipment",
      },
      {
        id: 25,
        imgSrc: "/img/portfolio/equipment8.png",
        title: "Technical Support Equipment 8",
        type: "Technical Support Equipment",
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
                  <li
                    data-filter=".filter-equipments"
                    className={
                      activeFilter === "filter-equipments"
                        ? "filter-active"
                        : ""
                    }
                    onClick={() => handleFilterClick("filter-equipments")}
                  >
                    Technical Support Equipment
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
        <Process />

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
