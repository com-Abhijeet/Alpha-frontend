import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Autoplay,
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const HeroSection2 = () => {
  const slides = [
    {
      id: 1,
      imgSrc: "./img/hero/hero1.png",
      header: "Welcome to ",
      subHeader: "Alpha Enterprises",
      body: "We are Manufacturer and Service Provider for high Quality Precision Components",
    },
    {
      id: 2,
      imgSrc: "./img/hero/hero2.png",
      header: "Our ",
      subHeader: "Vision ",
      body: " To prove top notch engineering solutions contributing to customer's revenue, profitability & provide a comptetitive advantage",
    },
    {
      id: 3,
      imgSrc: "./img/hero/hero3.png",
      header: "Facility ",
      subHeader: "Specialization",
      body: "We have world class facility equipped with  Sliding Head , Traub, Drill Machine , Taping Machine and CNC Machines",
    },
    {
      id: 4,
      imgSrc: "./img/hero/hero4.png",
      header: "Specialized ",
      subHeader: "Industries",
      body: "We are specialized in manufacturing of Precision Components for Automobile, Oil & Gas, Marine, Forging, Construction, Pharma Industries",
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, A11y, Navigation, Pagination, Scrollbar]}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <section
            id="hero"
            className="d-flex flex-column justify-content-center align-items-center position-relative"
          >
            <div className="hero-image-container overlay">
              <img
                src={slide.imgSrc}
                alt={`Slide ${slide.id}`}
                className="img-fluid w-100 h-100"
              />
            </div>
            <div
              className="container text-center text-md-left"
              data-aos="fade-up"
            >
              <h1>
                {slide.header}
                <span>{slide.subHeader}</span>
              </h1>
              <h2>{slide.body}</h2>
              <a href="/#what-we-do" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection2;
