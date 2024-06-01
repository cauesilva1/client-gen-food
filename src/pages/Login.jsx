import axios from "axios";
import React, { useEffect } from "react";
import "../stylePages/Login.css";
import Input from "../components/input";

import Button from "../components/button";

const Login = () => {
  useEffect(() => {});

  return (
    <>
      {
        <div className="fullPage">
          <div className="Card">
            <h1>LOGIN</h1>

            <div className="inputs">

              <div className="inputwithlabel">
                <label htmlFor="email">Email:</label>
              <Input
                id="email"
                placeholder="Email...."
                value=""
                onChange={() => {}}
              />
              </div>

              <div className="inputwithlabel">
                <label htmlFor="Nome">Nome:</label>
              <Input
                id="Nome"
                placeholder="Nome...."
                value=""
                onChange={() => {}}
              />
              </div>  

              <div className="inputwithlabel">
                <label htmlFor="Senha">Senha:</label>
              <Input
                id="Senha"
                placeholder="Senha...."
                value=""
                onChange={() => {}}
              />
              </div>

              <div className="inputwithlabel">
                <label htmlFor="ConfirmarSenha">Confirmar Senha:</label>
              <Input
                id="ConfirmarSenha"
                placeholder="ConfirmarSenha...."
                value=""
                onChange={() => {}}
              />
              </div>

            </div>


            <Button onclick={() => {}} children="Login" className="button" />
          </div>
        </div>
      }
    </>
  );
};

export default Login;
