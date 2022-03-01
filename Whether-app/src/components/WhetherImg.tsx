import React from "react";

var WhetherImage: string;

type inputImage = {
  whetherImg: string;
};
const WhetherImg = (props: inputImage) => {
  const WhetherData = props.whetherImg;
  switch (WhetherData) {
    case "Sunny":
      WhetherImage = "https://img.icons8.com/color/48/000000/smiling-sun.png";
      break;
    case "Cloudy":
      WhetherImage =
        "https://img.icons8.com/color/48/000000/partly-cloudy-day--v1.png";
      break;
    case "Snowy":
      WhetherImage =
        "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-snowy-weather-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png";
      break;
    case "Rainy":
      WhetherImage =
        "https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-rainy-spring-vitaliy-gorbachev-blue-vitaly-gorbachev.png";
      break;
  }
  return <img className="weather weather-img" alt="whetherImage" src={WhetherImage} />;
};

export default WhetherImg;
