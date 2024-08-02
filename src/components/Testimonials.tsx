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

const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What our clients say about us</p>
          </div>
          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                // navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Alpha Enterprises exceeded our expectations with their
                        outstanding service and professionalism. Their
                        innovative solutions significantly boosted our business
                        performance.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img
                        src="/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt="Saul Goodman"
                      />
                      <h3>Saul Goodman</h3>
                      <h4>CEO &amp; Founder, Goodman Inc.</h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        The team at Alpha Enterprises delivered exceptional
                        results on our project. Their expertise and dedication
                        were evident in every aspect of their work.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img
                        src="/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt="Sara Wilsson"
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer, Wilsson Designs</h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Working with Alpha Enterprises was a game-changer for
                        our store. Their solutions are top-notch and their
                        customer service is unparalleled.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img
                        src="/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt="Jena Karlis"
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner, Karlis Store</h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Alpha Enterprises provided excellent freelance support
                        that helped streamline our operations and increase our
                        productivity.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img
                        src="/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt="Matt Brandon"
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Partnering with Alpha Enterprises was the best decision
                        we made. Their expertise and innovative approach have
                        significantly improved our business processes.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img
                        src="/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt="John Larson"
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
