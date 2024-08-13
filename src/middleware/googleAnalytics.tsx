import { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize('G-LTC9GWLF3P');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export default Analytics;