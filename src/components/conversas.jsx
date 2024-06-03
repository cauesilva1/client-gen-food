import React from 'react';

const ChatItem = ({ profileImage, name, lastMessage, onClick }) => {
  return (
    <div className="flex items-start p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer border-y-[1px] border-green-950/20 mb-2" onClick={onClick}>
      <img 
        className="w-12 h-12 rounded-full object-cover mr-4" 
        src={profileImage} 
        alt={`${name}'s profile`} 
      />
      <div className="flex flex-col">
        <span className="font-semibold text-lg border-b border-gray-600/5 ">{name}</span>
        <span className="text-gray-500/50 mt-1">{lastMessage}</span>
      </div>
    </div>
  );
};

export default ChatItem;
