import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface CounterProps {
  label: string;
  value: number;
}

const Counter: React.FC<CounterProps> = ({ label, value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { mass: 2, tension: 20, friction: 20 },
  });

  return (
    <div className="counter">
      <p className="counter-label">{label}</p>
      <animated.span className="counter-value">
        {number.to((n) => n.toFixed(0))}
      </animated.span>
    </div>
  );
};

const Counters = () => {
  return (
    <div className="counters">
      <Counter label="Projects" value={150} />
      <Counter label="Staff" value={19} />
      <Counter label="Support Hours" value={1200} />
    </div>
  );
};

export default Counters;
