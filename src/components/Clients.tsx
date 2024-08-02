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

const Clients = () => {
  return (
    <>
      <section id="clients" className="clients">
        <div className="container">
          <div className="section-title">
            <h2>Clients</h2>
            <p>We Serve to a wide variety of prestigious clients</p>
          </div>
          <div className="clients-slider swiper-container">
            <div className="swiper-wrapper align-items-center">
              <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={4}
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
                    slidesPerView: 1,
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
                  <div className="client-swiper-slide">
                    <img
                      src="./assets/img/clients/vesan-engineering-logo.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-swiper-slide">
                    <img
                      src="./assets/img/clients/jagdamba-hero.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-swiper-slide">
                    <img
                      src="./assets/img/clients/mungiengineers-logo.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-swiper-slide">
                    <img
                      src="./assets/img/clients/Western-heat.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-swiper-slide">
                    <img
                      src="./assets/img/clients/ValveWorks-logo.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
