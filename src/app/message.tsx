'use client';

import React from 'react';

import { useSupabase } from '@/components/providers/supabase-provider';

type MessageProps = {
  message: Message,
  deleteMessage(id: number): void;
};

function Message({ message, deleteMessage }: MessageProps) {
  const { session } = useSupabase();
  const isSelfMsg = session?.user.id === message.user_id;

  return (
    <li
      key={message.id}
      className={`flex items-end justify-center
        ${isSelfMsg ? 'self-end' : 'flex-row-reverse self-start'}
      `}
    >
      <div className={`flex items-center text-white`}>
        <>
          {isSelfMsg && (
            <button
            onClick={() => deleteMessage(message.id)}
              className="ml-1 px-1 text-xs sm:text-sm font-semibold text-[#CF786F] hover:text-[#ED8DAE]"
            >
              ✕
            </button>
          )}
          <div className='flex items-center text-2xs mobile:text-xs'>
            <span>
              {message.inserted_at.split('T')[0].replaceAll('-', '.')}
            </span>
            <span className='ml-1'>
              {message.inserted_at.split('T')[1].substring(0, 5)}
            </span>
          </div>
        </>
      </div>
      <div
        className={`w-fit mobile:max-w-xl rounded-2xl shadow-sm px-2 py-1 bg-white text-sm mobile:text-base leading-4
          ${isSelfMsg ? 'ml-1' : 'mr-1'}
        `}
      >
        {message.text}
      </div>
    </li>
  );
}

export default Message;