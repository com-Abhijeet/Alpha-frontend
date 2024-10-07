import { Button } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Automobile", value: 31 },
  { name: "Oil and Gas", value: 67 },
  { name: "Railways", value: 1 },
  { name: "Others", value: 1 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA00FF",
  "#FF00AA",
  "#00AAFF",
];

const PieChartComponent = () => {
  const navigate = useNavigate();
  return (
    <section className="piechart-section">
      <div className="section-title">
        <h2>Customer Share by Industry</h2>
      </div>
      <div className="pie-chart-container">
        <div className="pie-chart-description">
          <p>
            We are a leading suppier for high tech custom parts for oil and gas
            , automotive industries. We also offer manufacturing services to{" "}
            <ul>
              <li>Marine industries</li>
              <li>Forging industries</li>
              <li>Construction industries</li>
              <li>Pharma industries</li>
            </ul>
            We also offer a wide range of our pre made products. <br />
            <div className="btn-container">
              <Button
                className="btn btn-primary"
                onClick={() => navigate("/portfolio")}
              >
                {" "}
                See Products
              </Button>
              <Button
                className="btn btn-primary bg-body-tertiary text-bg-light"
                onClick={() => navigate("/#contact")}
              >
                {" "}
                Contact
              </Button>
            </div>
          </p>
        </div>
        <ResponsiveContainer width="100%" height={400} className="pie-chart">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }: { name: string; percent: number }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((__entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default PieChartComponent;
