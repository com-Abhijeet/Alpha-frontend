const HeroSection = () => {
  return (
    <>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container text-center text-md-left" data-aos="fade-up">
          <h1>
            Welcome to <span>Alpha Enterprises</span>
          </h1>
          <h2>
            We are Manufacturer and Service Provider for high Quality Precision
            Components
          </h2>
          <a href="/#what-we-do" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
