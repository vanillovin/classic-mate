'use client';

import React, { useState } from 'react';

function NewMessage({ sendMessage }: { sendMessage(text: string, clearText: () => void): void; }) {
  const [text, setText] = useState(''); 
  const clearText = () => setText('');
  const isDisabled = text.trim().length < 3;

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        sendMessage(text, clearText);
      }}
      className="flex w-full h-10 items-center justify-center"
    >
      <input 
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder=""
        className="h-full flex-1 px-2 py-1"
      />
      <button
        type="submit"
        className={`h-full px-2 ${isDisabled ? 'bg-gray-200' : 'bg-[#EAAA65] text-white'}`}
        disabled={isDisabled}
      >
        전송
      </button>
    </form>
  );
}

export default NewMessage;