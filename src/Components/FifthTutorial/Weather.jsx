import React from "react";
const ColdWeather = () => {
  return <div>Cold Weather</div>;
};
const HotWeather = () => {
  return <div>Hot Weather</div>;
};

const Weather = ({ temp }) => {
  if (temp >= 25) {
    return <HotWeather />;
  } else {
    return <ColdWeather />;
  }
};

export default Weather;
