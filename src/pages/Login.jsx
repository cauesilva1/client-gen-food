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
          <GoogleLoginButton children={"Login com Google"}/>

            <div className="divisor"></div>

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
                <label htmlFor="Senha">Senha:</label>
              <Input
                id="Senha"
                placeholder="Senha...."
                value=""
                onChange={() => {}}
              />
              </div>

            </div>

 
            <Button onclick={() => {}} children="register" className="button" />
            <div className="links">
            <Link className="link">Esqueceu a senha?</Link>
            <Link className="link">Não tem uma conta?</Link>
            </div>
            

          </div>
        </div>
    );
};

export default Register;