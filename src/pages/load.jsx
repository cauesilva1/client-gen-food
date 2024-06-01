import React from "react";
import { useState, useEffect } from "react";
import "../stylePages/Load.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";



export default function Load() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fullUrl = window.location.href;
    setUrl(fullUrl);

    const token = fullUrl.split("#")[1];

    const EnviarJwt = async () => {
     
      try {
        const response = await axios.post(
          "https://gen-food.vercel.app/loadUser",
          token 
        );
        console.log("Data submitted successfully:", response.data);
        localStorage.setItem("token", JSON.stringify(response.data));

        navigate('/login')
      } catch (error) {
        console.error("There was an error submitting the data!", error);
      }
    };

    EnviarJwt();
  }, []);

  


  return (
    <div className="loadText">
      <h1>Loading...</h1>
    </div>
  );
}