import React from "react";
import "./WhetherData.css";
import "./background.css";
import WhetherImg from "./WhetherImg";

type WhetherDataType = {
  whetherItem: {
    id: number;
    city: string;
    date: Date | number;
    temp: number|string;
    tempType: string;
    whether: string;
  }[];
};
export type element = {
  id: number;
  city: string;
  date: any;
  temp: number |string;
  tempType: string;
  whether: string;
};
const WhetherData = (props: WhetherDataType) => {
  return (
    <div>
      {props.whetherItem.map((curelem: element) => {
        const time = new Date(curelem.date).toLocaleTimeString("en-us");
        const timeAmPm = time.split(" ");
        const timeHours:{}[] = time.split(":");
        console.log(typeof(timeHours));
        let color:string="";
        if (timeAmPm[1] === "AM" && timeHours[0] <= 6) {
           color= "weather-night";
        } else if (timeAmPm[1] === "AM" && timeHours[0] >= 6) {
          color = "weather-morning";
        } else if (timeAmPm[1] === "PM" && timeHours[0] <= 6) {
          color = "weather-afternoon";
        } else if (timeAmPm[1] === "PM" && timeHours[0] >= 6) {
          color = "weather-evening";
        }
        const date = new Date(curelem.date).toLocaleDateString("en-us");
        const cityCapitalized = curelem.city.charAt(0).toUpperCase() + curelem.city.slice(1)
        return (
          <section className={`weather-part ${color}`} key={curelem.id}>
            <div className="weather weather-city">
              <WhetherImg whetherImg={curelem.whether} />
              <span className="weather weather-city">{cityCapitalized}</span>
            </div>
            <div className="weather">
              <span className="City">{curelem.whether}</span>
              <div className="temp">
                <span className="numb">{curelem.temp}</span>
                <span className="deg">°</span>
                {curelem.tempType}
              </div>
            </div>
            <div className="bottom-details">
              <div className="column feels">
                <div className="details">
                  <div className="temp">
                    <span className="numb-2">{time}</span>
                  </div>
                </div>
              </div>
              <div className="column humidity">
                <div className="details">
                  <span>{date}</span>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default WhetherData;
