import React, { useState } from 'react';

function AddProductModal({ onClose, onSave, categories }) { // Adicionamos um prop "categories"
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: categories[0], // Inicializamos a categoria com a primeira da lista
    image: 'https://via.placeholder.com/150'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-[50%]">
        <h2 className="text-xl mb-4">Adicionar Novo Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Nome</label>
            <input 
              type="text" 
              name="name" 
              value={product.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Preço</label>
            <input 
              type="number" 
              name="price" 
              value={product.price} 
              onChange={handleChange} 
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Descrição</label>
            <textarea 
              name="description" 
              value={product.description} 
              onChange={handleChange} 
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Categoria</label>
            <select 
              name="category" 
              value={product.category} 
              onChange={handleChange} 
              className="w-full p-2 border rounded"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button 
              type="button" 
              onClick={onClose} 
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
