import { Link } from "react-router-dom";

const TechnicalSupportEquipment = () => {
  const portfolioData = [
    {
      id: 17,
      imgSrc: "/img/portfolio/equipment1.png",
      title: "Technical Support Equipment",
      type: "Technical Support Equipment",
    },
    {
      id: 18,
      imgSrc: "/img/portfolio/equipment2.png",
      title: "Technical Support Equipment",
      type: "Technical Support Equipment",
    },
    {
      id: 19,
      imgSrc: "/img/portfolio/equipment3.png",
      title: "Technical Support Equipment",
      type: "Technical Support Equipment",
    },
    {
      id: 20,
      imgSrc: "/img/portfolio/equipment4.png",
      title: "Technical Support Equipment",
      type: "Technical Support Equipment",
    },
    {
      id: 21,
      imgSrc: "/img/portfolio/equipment5.png",
      title: "Technical Support Equipment",
      type: "Technical Support Equipment",
    },
    {
      id: 22,
      imgSrc: "/img/portfolio/equipment6.png",
      title: "Technical Support Equipment",
      type: "Technical Support Equipment",
    },
    {
      id: 24,
      imgSrc: "/img/portfolio/equipment7.png",
      title: "Technical Support Equipment",
      type: "Technical Support Equipment",
    },
    {
      id: 25,
      imgSrc: "/img/portfolio/equipment8.png",
      title: "Technical Support Equipment",
      type: "Technical Support Equipment",
    },
    {
      id: 23,
      imgSrc: "/img/portfolio/product13.png",
      title: "Technical Support Equipment",
      type: "Technical Support Equipment",
    },
  ];
  return (
    <>
      <div id="root">
        <div className="main-content">
          <section id="support-equipments" className="portfolio">
            <div className="container">
              <div className="section-title">
                <h2>Support Equipments</h2>
                <p>
                  We use high quality support equiments to provide best quality
                  results
                </p>
              </div>
              <div className="row portfolio-container">
                {portfolioData.map((item) => (
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
                      </figure>
                      <div className="portfolio-info">
                        <h4>
                          <Link to="">{item.title}</Link>
                        </h4>
                        <p>{item.type}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TechnicalSupportEquipment;
