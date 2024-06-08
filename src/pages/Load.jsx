import React from "react";
import { useEffect } from "react";
import "../stylePages/Load.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";


const Load = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fullUrl = window.location.href;

    const token = fullUrl.split("#")[1];

    const EnviarJwt = async () => {
     
      try {
        const response = await axios.post(
          "https://gen-food.vercel.app/loadUser",
          { token },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log("Data submitted successfully:", response.data);
        localStorage.setItem("token", JSON.stringify(response.data));

        navigate('/home')
      } catch (error) {
        console.error("There was an error submitting the data!", error);
      }
    };

    EnviarJwt();
  }, [navigate]);

  


  return (
    <div className="loadText">
      <h1>Loading...</h1>
    </div>
  );
}


export default Load;