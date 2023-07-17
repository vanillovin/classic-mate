import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';

import SignOutButton from '@/components/SignOutButton';
import { createServerClient } from '@/utils/supabase-server';

export default async function ProfilePage({ params }: { params: { userId: string } }) {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  const { data } = await supabase.from('profiles').select().eq('id', params.userId);
  const { data: classics } = await supabase.from('all_classics').select();
  const { data: likes } = await supabase.from('classic_likes').select().eq('user_id', params.userId);

  const profile = data?.[0];

  if (!session) redirect('/unauthenticated');
  
  if (!profile) return notFound();
  
  return (
    <section className='p-4 flex flex-col sm:flex-row h-screen'>
      <div className='bg-white flex flex-row sm:flex-col p-3 sm:p-5 w-full sm:w-fit shadow-sm'>
        <div className='relative w-24 h-24 sm:w-40 sm:h-40 rounded-sm overflow-hidden'>
          <Image
            src={'/kylie-paz-cbl1K6yJlDI-unsplash.jpg'}
            alt=''
            fill={true}
            className='object-cover'
          />
        </div>
        <div className='ml-2 sm:ml-0 sm:p-1'>
          <p className='font-medium sm:mt-2'>{profile.nickname || 'nickname'}</p>
          <p className='text-sm sm:text-base'>{profile.website || 'website'}</p>
          <p className='text-sm sm:text-base'>{profile.description || 'description'}</p>
          {session.user.id === params.userId && (
            <div className='flex gap-1 py-1'>
              <button className='bg-black text-white rounded-sm p-1 text-sm sm:text-base'>회원정보수정</button>
              <SignOutButton className='bg-white border rounded-sm p-1 text-sm sm:text-base'>
                로그아웃
              </SignOutButton>
            </div>
          )}
          <ul className=''>
          </ul>
        </div>
      </div>
      <div className='flex-1 bg-white bg-opacity-50 p-3 sm:p-5 shadow-sm'>
        <h2 className='text-lg sm:text-xl font-semibold'>좋아요한 클래식</h2>
        <ul className='bg-white bg-opacity-70 rounded-sm mt-2'>
          {likes?.map(like => (
            <li
              key={like.created_at}
              className='p-2 border-b-1 border-white last:border-b-0 hover:bg-white transition-all'
            >
              <Link href={`/classics/${like.classic_id}`}>
                <span className='font-medium mr-1'>{classics?.find(classic => classic.id === like.classic_id)?.title}</span>
                <span className='text-sm'>{like.created_at.split('T')[0]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}