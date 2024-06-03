import React from 'react';

const Chat = ({ profileImage, name, messages }) => {
  console.log('Chat props:', { profileImage, name, messages });

  return (
    <div className="flex flex-col h-full">
      {/* Cabeçalho */}
      <div className="bg-gray-200 p-4 flex items-center border-b border-gray-300 mb-4">
        <img
          src={profileImage}
          alt="Foto do Cliente"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-bold text-lg">{name}</p>
          {/* Outras informações do cliente, se necessário */}
        </div>
      </div>

      {/* Corpo da conversa */}
      <div className="flex-1 overflow-y-auto px-4">
        {/* Mensagens e respostas */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              message.sender === 'client' ? 'items-start' : 'items-end'
            } mb-4`}
          >
            <div
              className={`${
                message.sender === 'client' ? 'bg-green-400 text-white' : 'bg-gray-300 text-gray-800'
              } rounded-lg p-2 max-w-[75%]`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Rodapé para enviar mensagem */}
      <div className="bg-gray-200 p-4 flex items-center border-t border-gray-300">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className="flex-1 px-4 py-2 rounded-full bg-white focus:outline-none border border-gray-300"
        />
        <button className="bg-green-400 text-white font-bold py-2 px-4 rounded-full ml-4">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
