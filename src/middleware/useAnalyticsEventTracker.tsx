import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category = "Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    console.log(`Tracking Event - Category: ${category}, Action: ${action}, Label: ${label}`);
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

export default useAnalyticsEventTracker;