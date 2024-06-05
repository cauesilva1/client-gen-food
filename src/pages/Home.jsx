import React, { useEffect, useState } from "react";
import "../stylePages/Home.css";
import ListaProdClient from "../components/ListaProdClient";
import { Link } from "react-router-dom";

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState("");
  // const [token, setToken] = useState();

  // useEffect(() => {
  //   // Recuperar os dados do localStorage
  //   const storedData = localStorage.getItem("token");
  //   const objInfo = JSON.parse(storedData);
    
  //   setToken(objInfo);
  // }, []);
  
  // console.log("teste", token);

  const Produtos = [
    {
      name: "Pizza Margherita",
      price: 30,
      description:
        "Pizza clássica com molho de tomate, mussarela, manjericão e azeite de oliva.",
      category: "Pizza Salgada",
      image:
        "https://via.placeholder.com/150/FF5733/FFFFFF/?text=Pizza+Margherita",
    },
    {
      name: "Pizza Pepperoni",
      price: 35,
      description:
        "Pizza com molho de tomate, mussarela e fatias de pepperoni.",
      category: "Pizza Salgada",
      image: "https://via.placeholder.com/150?text=Pizza+Pepperoni",
    },
    {
      name: "Pizza Quatro Queijos",
      price: 40,
      description:
        "Pizza com molho de tomate e uma mistura de mussarela, gorgonzola, parmesão e provolone.",
      category: "Pizza Salgada",
      image: "https://via.placeholder.com/150?text=Pizza+Quatro+Queijos",
    },
    {
      name: "Pizza Calabresa",
      price: 35,
      description: "Pizza com molho de tomate, mussarela, calabresa e cebola.",
      category: "Pizza Salgada",
      image: "https://via.placeholder.com/150?text=Pizza+Calabresa",
    },
    {
      name: "Pizza Frango com Catupiry",
      price: 38,
      description:
        "Pizza com molho de tomate, mussarela, frango desfiado e catupiry.",
      category: "Pizza Salgada",
      image: "https://via.placeholder.com/150?text=Pizza+Frango+com+Catupiry",
    },
    {
      name: "Pizza Doce de Chocolate",
      price: 30,
      description:
        "Pizza doce com cobertura de chocolate, pedaços de chocolate e morangos.",
      category: "Pizza Doce",
      image: "https://via.placeholder.com/150/FF5733/FFFFFF/?text=Pizza+Doce+de+Chocolate",
    },
    {
      name: "Pizza Doce de Banana e Canela",
      price: 35,
      description:
        "Pizza doce com banana, açúcar e canela.",
      category: "Pizza Doce",
      image: "https://via.placeholder.com/150?text=Pizza+Doce+de+Banana+e+Canela",
    },
    {
      name: "Coca-Cola 2L",
      price: 10,
      description: "Garrafa de Coca-Cola 2 litros.",
      category: "Bebidas",
      image: "https://via.placeholder.com/150?text=Coca-Cola+2L",
    },
    {
      name: "Guaraná Antarctica 2L",
      price: 10,
      description: "Garrafa de Guaraná Antarctica 2 litros.",
      category: "Bebidas",
      image: "https://via.placeholder.com/150?text=Guaraná+Antarctica+2L",
    },
    {
      name: "Suco de Laranja 500ml",
      price: 8,
      description: "Suco de laranja natural 500ml.",
      category: "Bebidas",
      image: "https://via.placeholder.com/150?text=Suco+de+Laranja+500ml",
    },
    {
      name: "Água Mineral 500ml",
      price: 5,
      description: "Garrafa de água mineral 500ml.",
      category: "Bebidas",
      image: "https://via.placeholder.com/150?text=Água+Mineral+500ml",
    },
  ];

  // Extrai as categorias únicas dos produtos
  const categories = ["", ...new Set(Produtos.map((product) => product.category))];

  // Filtra os produtos com base na categoria selecionada
  const filteredProducts = selectedCategory
    ? Produtos.filter((product) => product.category === selectedCategory)
    : Produtos;


    return (
      <div className="fullPageHome">
        <div className="w-full h-14 flex items-center justify-between px-10 bg-red-500">
          <h1>Logo</h1>
          <div className="flex gap-10">
            <Link to={"/Home"}>Cardapio</Link>
            <Link to={"/Perfil"}>Perfil</Link>
          </div>
        </div>
        <div className="w-[90%] h-40 mt-10 bg-red-500 flex justify-center items-center">
          <h1>Banner</h1>
        </div>
        <div className="filter-container w-[90%] mt-10 flex justify-center items-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${selectedCategory === category ? "active" : ""}`}
            >
              {category || "Todas as Categorias"}
            </button>
          ))}
        </div>
        <div>
          <ListaProdClient products={filteredProducts} />
        </div>
      </div>
    );
  };
  
  export default Home;
