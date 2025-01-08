import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const machineData = [
  {
    id: 1,
    description: "AMS MCV 300",
    machineNo: "VMC-01",
    capacity: "500 MM BEDSIZE",
    make: "AMS",
    imageUrl: "/img/portfolio/vmc-machine1.png",
  },
  {
    id: 2,
    description: "Jyoti-DX200-3B",
    machineNo: "CNC-01",
    capacity: "200DIA/300 MM Length",
    make: "JyotiCNC",
    imageUrl: "https://jyoti.co.in/wp-content/uploads/2021/11/dx-200-3.webp",
  },
  {
    id: 4,
    description: "Tsugami-B0325-III",
    machineNo: "CNC-03",
    capacity: "32DIA/400 MM Length",
    make: "TSUGAMI",
    imageUrl: "/img/portfolio/tsugami-machine.JPG",
  },
  {
    id: 8,
    description: "Lathe4.5 Feet",
    machineNo: "Lathe26",
    capacity: "Dai 300 to 1000 mm",
    make: "Sheetal",
    imageUrl: "/img/portfolio/lathe-machine2.png",
  },
];

const SpecializationMachine = () => {
  return (
    <>
      <section className="section">
        <div className="section-title">
          <h2>Specialization Machines</h2>
        </div>
        <div className="specialization-machine">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {machineData.map((machine) => (
              <SwiperSlide key={machine.id}>
                <div className="slide-content">
                  <img
                    src={machine.imageUrl}
                    alt={machine.description}
                    className="slide-image"
                  />
                  <div className="slide-text">
                    <h3>{machine.description}</h3>
                    <p>
                      <strong>Machine No:</strong> {machine.machineNo}
                    </p>
                    <p>
                      <strong>Capacity:</strong> {machine.capacity}
                    </p>
                    <p>
                      <strong>Make:</strong> {machine.make}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SpecializationMachine;
