import React, { useState } from "react";
import "../../stylePages/adm/dashbord.css";
import ChatItem from "../../components/conversas";
import Chat from "../../components/chat";

const Dashbord = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);

  const chats = [
    {
      profileImage: "https://github.com/johndoe.png",
      name: "John Doe",
      messages: [
        { text: "Hey, how are you doing?", sender: "client" },
        { text: "I'm doing fine, thank you!", sender: "admin" },
      ],
    },
    {
      profileImage: "https://github.com/johndoe.png",
      name: "Jane Smith",
      messages: [
        { text: "Can we reschedule our meeting?", sender: "client" },
        { text: "Sure, when would you like to reschedule?", sender: "admin" },
      ],
    },
    {
      profileImage: "https://github.com/johndoe.png",
      name: "Michael Johnson",
      messages: [
        { text: "What are you working on?", sender: "client" },
        { text: "I'm currently working on the new project.", sender: "admin" },
      ],
    },
  ];

  const handleChatItemClick = (index) => {
    setSelectedChatIndex(index);
  };

  return (
    <div className="fullPageDashbord">
      {/* Cabeçalho */}
      <div className=" w-[100%] h-8 flex justify-center items-center px-10 py-6 border-b border-gray-700">
        <h1 className="text-white text-2xl">||||||||||</h1>
        <div className="flex justify-center items-center gap-10 w-full">
          <h1 className="text-white text-2xl">Home</h1>
          <h1 className="text-white text-2xl">Produtos</h1>
        </div>
      </div>

      {/* Corpo do Dashbord */}
      <div className="flex justify-around w-screen h-full py-4 px-4 ">
        {/* Lista de chats */}
        <div className="bg-slate-100 rounded w-[40%] h-[90vh] px-2 py-2 overflow-y-auto scrollbar-thin">
          {chats.map((chat, index) => (
            <ChatItem
              key={index}
              profileImage={chat.profileImage}
              name={chat.name}
              lastMessage={chat.messages[chat.messages.length - 1].text}
              onClick={() => handleChatItemClick(index)}
            />
          ))}
        </div>

        {/* Detalhes do chat selecionado */}
        <div className="flex flex-col w-[50%] h-full gap-[70px]">
          <div className="w-full h-[55%] border rounded">
            {selectedChatIndex !== null && (
              <Chat
                profileImage={chats[selectedChatIndex].profileImage}
                name={chats[selectedChatIndex].name}
                messages={chats[selectedChatIndex].messages}
              />
            )}
          </div>

          <div className="bg-slate-700 w-full h-[30%]">
            <h2 className="text-white text-center font-bold text-lg mb-2">
              Pedidos
            </h2>

            <div className="max-h-full overflow-y-auto scrollbar-thin">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-700 text-white">
                    <th className="py-2 px-4 border border-white">
                      Número do Pedido
                    </th>
                    <th className="py-2 px-4 border border-white">
                      Nome do Cliente
                    </th>
                    <th className="py-2 px-4 border border-white">
                      Hora de Criação
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-800 text-white">
                    <td className="py-2 px-4 border border-white">001</td>
                    <td className="py-2 px-4 border border-white">
                      João Silva
                    </td>
                    <td className="py-2 px-4 border border-white">10:00</td>
                  </tr>

                  <tr className="bg-slate-800 text-white">
                    <td className="py-2 px-4 border border-white">002</td>
                    <td className="py-2 px-4 border border-white">
                      Maria Souza
                    </td>
                    <td className="py-2 px-4 border border-white">11:30</td>
                  </tr>

                  <tr className="bg-slate-800 text-white">
                    <td className="py-2 px-4 border border-white">003</td>
                    <td className="py-2 px-4 border border-white">
                      Carlos Oliveira
                    </td>
                    <td className="py-2 px-4 border border-white">13:45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
