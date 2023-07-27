'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import CommentItem from './CommentItem';
import supabase from '@/lib/supabase/client';

function CommentList({
  postId,
  serverComments
}: {
  postId: string;
  serverComments: PostComment[];
}) {
  const { data: comments } = useQuery({
    queryKey: ['postComments', postId],
    queryFn: async () => { 
      const { data } = await supabase
        .from('test_comments')
        .select()
        .order('created_at', { ascending: false })
        .eq('post_id', postId);
      return data;
    },
    initialData: serverComments,
    suspense: true,
  });

  return (
    <ul className='overflow-y-scroll scrollbar flex-1'>
      {comments?.map(comment => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
  );
}

export default CommentList;