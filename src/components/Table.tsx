const machineData = [
  {
    id: 1,
    description: "AMS MCV 300",
    machineNo: "VMC-01",
    capacity: "500 MM BEDSIZE",
    make: "AMS",
  },
  {
    id: 2,
    description: "Jyoti-DX200-3B",
    machineNo: "CNC-01",
    capacity: "200DIA/300 MM Length",
    make: "Jyoti CNC",
  },
  {
    id: 3,
    description: "Jyoti-DX200-4B",
    machineNo: "CNC-02",
    capacity: "200DIA/400 MM Length",
    make: "Jyoti CNC",
  },
  {
    id: 4,
    description: "Tsugami-B0325-III",
    machineNo: "CNC-03",
    capacity: "32DIA/400 MM Length",
    make: "TSUGAMI",
  },
  {
    id: 5,
    description: "PMT machine",
    machineNo: "Traub-04",
    capacity: "Dai 3 to 32 mm",
    make: "PMT",
  },
  {
    id: 8,
    description: "Lathe 4.5 Feet",
    machineNo: "Lathe26",
    capacity: "Dai 300 to 1000 mm",
    make: "Sheetal",
  },
  {
    id: 9,
    description: "Singer ",
    machineNo: "Milling 27",
    capacity: "1 meter",
    make: "Singer",
  },
  {
    id: 10,
    description: "Italy Machine",
    machineNo: "Drill 11-21",
    capacity: "Dai 1-40mm",
    make: "ITCO",
  },
  {
    id: 11,
    description: "ITCO Tapping",
    machineNo: "Tapping 21-25",
    capacity: "Tap 30mm",
    make: "ITCO",
  },
];

const Table = () => {
  return (
    <>
      <section id="facility" className="facility-section">
        <div className="section-title">
          <h2 className="machine-heading">Machine Facility</h2>
        </div>
        <div className="machine-container">
          {machineData.map((machine) => (
            <div key={machine.id} className="machine-card">
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
      </section>
    </>
  );
};

export default Table;
