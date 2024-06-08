import React from 'react';
import '../StyleComponents/buttonGoogle.css'; // Importar o arquivo CSS para estilização

const GoogleLoginButton = ({ onClick, children }) => {
  return (
    <a className="google-btn" href='https://gen-food.vercel.app'>
      <img
        src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
        alt="Google Logo"
      />
      {children}
    </a>
  );
};

export default GoogleLoginButton;
