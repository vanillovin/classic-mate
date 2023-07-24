'use client';

import React from 'react';

import { formatTimestamp } from '@/utils/dateUtils';

function CommentItem({
  userId,
  comment
}: {
  userId: string;
  comment: PostComment; 
}) {
  return (
    <li className='p-1 sm:p-2 sm:px-0 border-b last:border-b-0 text-sm sm:text-base'>
      <div className='flex items-center justify-between'>
        <div className='flex space-x-1'>
          <p>{comment.nickname}</p>
          <div className='flex items-center text-xs sm:text-sm text-whitemoon-darkgray'>
            <p>{formatTimestamp(comment.created_at)}</p>
            {comment.created_at !== comment.updated_at && (
              <p className='mx-1'>· <span className='text-peachmoon-rose'>수정됨</span></p>
            )}
          </div>
        </div>
        {userId === comment.user_id && (
          <div className='dropdown dropdown-left'>
            <label tabIndex={0} className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:text-peachmoon-rose">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] p-1 space-y-1 text-sm shadow bg-base-100 rounded-sm w-24 transition-all'
            >
              <li className='w-full flex items-center justify-center p-1 transition-all hover:bg-whitemoon-lightgray'>
                <button className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  <span className='ml-1'>수정하기</span>
                </button>
              </li>
              <li className='w-full flex items-center justify-center p-1 transition-all hover:bg-whitemoon-lightgray'>
                <button className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  <span className='ml-1'>삭제하기</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <p>{comment.content}</p>
    </li>
  );
}

export default CommentItem;