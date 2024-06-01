import React, { useEffect, useState } from "react";
import "../stylePages/Login.css";

const Home = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    // Recuperar os dados do localStorage
    const storedData = localStorage.getItem("token");
    const objInfo = JSON.parse(storedData);
    
    setToken(objInfo);
  }, []);
  
  console.log("teste", token);
  return (
    <div>
    <h1>User Profile</h1>
    {token ? (
      <div className="profile">
        <img src={token.picture} alt="foto usuario" />
        <p>Name: {token.name}</p>
        <p>Email: {token.email}</p>
        {/* Renderizar outras informações do usuário conforme necessário */}
      </div>
    ) : (
      <p>No user data found</p>
    )}
  </div>
  );
};

export default Home;
