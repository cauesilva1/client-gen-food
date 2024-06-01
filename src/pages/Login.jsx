import React from "react";
import "../stylePages/Login.css";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import GoogleLoginButton from "../components/buttonGoogle";

const Register = () => {
    return (
        <div className="fullPage">
          <div className="Card">
          <GoogleLoginButton children={"registro com Google"}/>

            <div className="divisor"></div>

            <div className="inputs">

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
                <label htmlFor="email">Email:</label>
              <Input
                id="email"
                placeholder="Email...."
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
                <label htmlFor="Confirmar">Confirmar senha:</label>
              <Input
                id="Confirmar"
                placeholder="Confirmar...."
                value=""
                onChange={() => {}}
              />
              </div>

            </div>

 
            <Button onclick={() => {}} children="register" className="button" />
            <div className="links">
            <Link className="link">Esqueceu a senha?</Link>
            </div>
            

          </div>
        </div>
    );
};

export default Register;