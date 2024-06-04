import React from 'react';

function ProductList({ products }) {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
    {products.map((product, index) => (
      <div key={index} className="border  p-4 rounded shadow-sm border-red-600">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-500">${product.price}</p>
        <p className="mt-2">{product.description}</p>
        <p className="mt-2 text-sm text-gray-400">{product.category}</p>
      </div>
    ))}
  </div>
  );
}

export default ProductList;
