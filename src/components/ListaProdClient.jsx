import React from 'react';

function ListaProdClient({ products, buyProduct }) {
  const handleBuy = (index) => {
    buyProduct(index);
  };

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
      {products.map((product, index) => (
        <div key={index} className=" flex flex-col items-center justify-between relative border p-4 rounded shadow-sm border-red-600">
          {/* Conteúdo do produto */}
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-500">${product.price}</p>
          <p className="mt-2 text-center">{product.description}</p>
          <p className="mt-2  text-sm text-gray-400">{product.category}</p>

          <button 
            className=" mt-2 px-2 py-1 bg-green-500 text-white rounded"
            onClick={() => handleBuy(index)}
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListaProdClient;
