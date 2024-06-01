import React from "react";
import { useState, useEffect } from "react";
import "../stylePages/Load.css";
import axios from "axios";

export default function Load() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fullUrl = window.location.href;
    setUrl(fullUrl);    
    
    const token = getUrl.split("#")[1];

    const EnviarJwt = async (event) => {
        try {
          const response = await axios.post(
            "https://gen-food.vercel.app/updateUser",
            token
          );
          console.log("Data submitted successfully:", response.data);
        } catch (error) {
          console.error("There was an error submitting the data!", error);
        }
      };

    EnviarJwt();
  }, []);



  

  return <div className="loadText">Loading...</div>;
}
