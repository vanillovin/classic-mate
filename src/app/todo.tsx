'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

export default function Todo({ todo }: { todo: any }) {
  const router = useRouter();

  const markAsComplete = async () => {
    // console.log('clicked');
    await fetch(`http://localhost:3000/todos`, {
      method: 'put',
      body: JSON.stringify({ id: todo.id, isComplete: !todo.is_complete })
    });
    router.refresh();
  };

  return (
    <li key={todo.id}>
      <button
        onClick={markAsComplete}
        className={`${todo.is_complete ? 'line-through' : ''}`}
      >
        📍 {todo.task}
      </button>
    </li>
  )
}
