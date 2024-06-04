import React, { useState } from "react";
import ProductList from "../../components/produtosList";
import AddProductModal from "../../components/modalProdut";
import "../../stylePages/adm/produtos.css";

function Produtos() {
    const initialProducts = [
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
      

  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useState(() => {
    const uniqueCategories = [...new Set(initialProducts.map(product => product.category))];
    setCategories(uniqueCategories);
  }, [initialProducts]);

  const addProduct = (product) => {
    setProducts([...products, product]);
    setIsModalOpen(false);
  };

  const filterProductsByCategory = (category) => {
    // Se 'Todos' for selecionado, exiba todos os produtos
    if (category === 'Todos') {
      setProducts(initialProducts);
    } else {
      const filteredProducts = initialProducts.filter(product => product.category === category);
      setProducts(filteredProducts);
    }
    setSelectedCategory(category); // Atualiza a categoria selecionada
  };

  return (
    <div className="fullPageProdutos">
      <div className="p-4">
        <div className="flex mb-4">
          {/* Botão "Adicionar Produto" */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
            onClick={() => setIsModalOpen(true)}
          >
            Adicionar Produto
          </button>

          {/* Botão "Todos" */}
          <button
            className={`bg-gray-300 text-gray-700 px-4 py-2 rounded mr-4 ${selectedCategory === 'Todos' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => filterProductsByCategory('Todos')}
          >
            Todos
          </button>

          {/* Botões de filtro por categoria */}
          {categories.map(category => (
            <button
              key={category}
              className={`bg-gray-300 text-gray-700 px-4 py-2 rounded mr-4 ${selectedCategory === category ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => filterProductsByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductList products={products} />

        {isModalOpen && (
          <AddProductModal 
          onClose={() => setIsModalOpen(false)}
          onSave={addProduct}
          categories={['Pizza salgada', 'Pizza Doce', 'Bebidas', 'Sobremesas']} // Lista de categorias
        />
        )}
      </div>
    </div>
  );
}

export default Produtos;
