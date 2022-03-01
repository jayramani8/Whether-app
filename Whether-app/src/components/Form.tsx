import React, { useState } from "react";
import "./Form.css";
import WhetherData from "./WhetherData";
import { element } from "./WhetherData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const formDataArray: element[] = [];
const Form = () => {
  const [inputObj,setInputObj] = useState<element>({id:0, city:"", date:"", temp:"",tempType:"",whether:""})
  
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    const city = event.target.value;
    setInputObj({
      ...inputObj,
      [event.target.name]:city
    })
  };
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      inputObj.city === "" ||
      inputObj.date === "" ||
      inputObj.temp === "" ||
      inputObj.tempType === "" ||
      inputObj.whether === ""
    ) {
      toast ("Please Fill all Input");
    } else {
      var formData = {
        id: Math.floor(Math.random() * 1000),
        city: inputObj.city,
        date: Date.parse(inputObj.date),
        temp: inputObj.temp,
        tempType: inputObj.tempType,
        whether: inputObj.whether,
      };
      formDataArray.push(formData);
      console.log(formDataArray);
      setInputObj({id:0, city:"", date:"", temp:"",tempType:"",whether:""});
      
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="title">Whether App</div>
        <div className="content">
          <form>
            <div className="user-details">
              <div className="input-box">
                <label className="details ">City</label>
                <span id="uName"></span>
                <input
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  value={inputObj.city}
                  onChange={inputHandler}
                />
              </div>
              <div className="input-box">
                <label className="details">Date</label> <span id="eMail"></span>
                <input
                  type="datetime-local"
                  name="date"
                  value={inputObj.date}
                  onChange={inputHandler}
                  placeholder="Enter Date"
                />
              </div>
              <div className="input-box-Temperature">
                <label className="details">Temperature</label>
                <span id="pass"></span>
                <br />
                <div className="Temperature">
                  <input
                    type="number"
                    name="temp"
                    value={inputObj.temp}
                    onChange={inputHandler}
                    id="password"
                    placeholder="Enter Temperature"
                    required
                  />
                  <select
                    className="details"
                    name="tempType"
                    onChange={inputHandler}
                    value={inputObj.tempType}
                    required
                  >
                    <option value="">Select</option>
                    <option value="F">Fahrenheit</option>
                    <option value="C">Celsius</option>
                  </select>
                </div>
              </div>
              <div className="input-box-Temperature">
                <label className="details">Whether</label>
                <span id="pass"></span>
                <br />
                <div className="Temperature">
                  <select
                    className="details"
                    name="whether"
                    onChange={inputHandler}
                    value={inputObj.whether}
                  >
                    <option value="">Select</option>
                    <option value="Sunny">Sunny</option>
                    <option value="Cloudy">Cloudy</option>
                    <option value="Snowy">Snowy</option>
                    <option value="Rainy">Rainy</option>
                  </select>
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  onClick={onSubmitHandler}
                  className="btn-submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <WhetherData whetherItem={formDataArray} />
    </div>
  );
};
export default Form;
