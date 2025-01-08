import { useState } from "react";

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
    imageUrl: "/img/portfolio/cnc-machine1.png",
  },
  {
    id: 3,
    description: "Jyoti-DX200-4B",
    machineNo: "CNC-02",
    capacity: "200DIA/400 MM Length",
    make: "JyotiCNC",
    imageUrl: "/img/portfolio/cnc-machine2.png",
  },
  {
    id: 4,
    description: "Tsugami-B0325-III",
    machineNo: "CNC-03",
    capacity: "32DIA/400 MM Length",
    make: "TSUGAMI",
    imageUrl: "/img/portfolio/tsugami-machine.png",
  },
  {
    id: 5,
    description: "PMT machine Dai 3 to 32mm",
    machineNo: "Traub-04",
    capacity: "-10 Dai 3 to 32 mm",
    make: "PMT",
    imageUrl: "/img/portfolio/pmt-machine.png",
  },
  {
    id: 8,
    description: "Lathe4.5 Feet",
    machineNo: "Lathe26",
    capacity: "Dai 300 to 1000 mm",
    make: "Sheetal",
    imageUrl: "/img/portfolio/lathe-machine.png",
  },
  {
    id: 9,
    description: "Singer Milling27",
    machineNo: "1meter",
    capacity: "Singer",
    imageUrl: "/img/portfolio/singer-milling.png",
  },
];

const Table = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="facility" className="facility-section">
        <div className="section-title">
          <h2 className="machine-heading">Machine Facility</h2>
        </div>
        <div className="machine-container">
          {machineData.map((machine) => (
            <div
              key={machine.id}
              className="machine-card"
              onClick={() => handleCardClick(machine.imageUrl)}
            >
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
          ))}
        </div>
        {selectedImage && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Machine" className="modal-image" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Table;
