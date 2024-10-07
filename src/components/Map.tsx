import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import "react-tooltip/dist/react-tooltip.css";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const colorScale = scaleLinear<string>()
  .domain([1, 10])
  .range(["#d4e6f1", "#1f618d"]);
const servicesData = [
  {
    country: "United States of America",
    value: 10,
    info: "Service info for USA",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    country: "India",
    value: 8,
    info: "Service info for India",
    flag: "https://flagcdn.com/in.svg",
  },
  {
    country: "Germany",
    value: 6,
    info: "Service info for Germany",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    country: "Spain",
    value: 6,
    info: "Service info for Germany",
    flag: "https://flagcdn.com/es.svg",
  },
  {
    country: "France",
    value: 6,
    info: "Service info for Germany",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    country: "Portugal",
    value: 6,
    info: "Service info for Germany",
    flag: "https://flagcdn.com/pt.svg",
  },
  {
    country: "United Kingdom",
    value: 4,
    info: "Service info for UK",
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    country: "Canada",
    value: 4,
    info: "Service info for UK",
    flag: "https://flagcdn.com/ca.svg",
  },
];
const Map = () => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = (geo: any, current: any) => {
    return (event: React.MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setTooltipContent(
        `Country: ${geo.properties.name}\nInfo: ${
          current ? current.info : "No data available"
        }`
      );
      setShowTooltip(true);
    };
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <section id="map-section" className="map-section">
        <div className="map-title section-title">
          <h2>Services Offered in</h2>
        </div>
        <div className="map-container">
          <div className="map">
            <ComposableMap className="composable-map" data-tip="">
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo) => {
                    const current = servicesData.find(
                      (s) => s.country === geo.properties.name
                    );
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={handleMouseEnter(geo, current)}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        style={{
                          default: {
                            fill: current ? colorScale(current.value) : "#EEE",
                            outline: "none",
                          },
                          hover: {
                            fill: current ? colorScale(current.value) : "#CCC",
                            outline: "none",
                          },
                          pressed: {
                            fill: current ? colorScale(current.value) : "#AAA",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
            {showTooltip && (
              <div
                className="custom-tooltip"
                style={{
                  top: mousePosition.y + 10,
                  left: mousePosition.x + 10,
                }}
              >
                {tooltipContent.split("\n").map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            )}
          </div>
          <div className="country-list">
            <h3>Countries</h3>
            <ul>
              {servicesData.map((country) => (
                <li key={country.country}>
                  <img src={country.flag} alt={`${country.country} flag`} />
                  {country.country}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
