'use client';

import { toast } from 'react-toastify';
import React, { useState } from 'react';

import { useAuth } from '../providers/auth-provider';
import { useSupabase } from '../providers/supabase-provider';

function ClassicLikeButton({ classicId, likes, className, name }: {
  classicId: number,
  likes: ClassicLike[];
  className?: string;
  name?: string;
}) {
  const auth = useAuth();
  const { supabase } = useSupabase();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(!!likes.find(
    like => like.classic_id === classicId
  ));

  const handleHover = () => setIsHovered(!isHovered);

  const handleLikeClassic = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!auth.user) return toast.error('로그인 후 이용 가능합니다');
    if (!isLiked) {
      const { error } = await supabase
        .from('classic_likes')
        .insert({
          classic_id: classicId,
          user_id: auth.user?.id,
        });      
      if (!error) {
        toast.success('좋아요 완료');
        setIsLiked(true);
      } else {
        toast.error('좋아요 실패');
      }
    } else {
      const { error } = await supabase
      .from('classic_likes')
      .delete()
      .eq('classic_id', classicId);
      if (!error) {
        toast.success('좋아요 취소 완료');
        setIsLiked(false);
      } else {
        toast.error('좋아요 취소 실패');
      }
    }
  };

  return (
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleLikeClassic}
        className={`flex items-center justify-center ${className}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isLiked ? "currentColor" : (isHovered ? "currentColor " : "none")}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 hover:text-vintage-holiday-red"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round" d="M21 8.26c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            className="text-vintage-holiday-red"
          />
        </svg>
        {name && <span className='text-sm sm:text-base'>{name}</span>}
      </button>
  );
}

export default ClassicLikeButton;