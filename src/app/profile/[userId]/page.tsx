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
    <section className='p-4 flex h-screen'>
      <div className='bg-white p-5 w-fit'>
        <div className='relative w-40 h-40 rounded-sm overflow-hidden'>
          <Image
            src={'/kylie-paz-cbl1K6yJlDI-unsplash.jpg'}
            alt=''
            fill={true}
            className='object-cover'
          />
        </div>
        <div className='p-1'>
          <p className='font-medium mt-2'>{profile.nickname || 'nickname'}</p>
          <p className=''>{profile.website || 'website'}</p>
          <p className=''>{profile.description || 'description'}</p>
          <div className='flex gap-1 py-1'>
            <button className='bg-black text-white rounded-sm p-1'>회원정보수정</button>
            <SignOutButton className='bg-white border rounded-sm p-1'>
              로그아웃
            </SignOutButton>
          </div>
          <ul className=''>
          </ul>
        </div>
      </div>
      <div className='flex-1 bg-white bg-opacity-50 p-5'>
        <h2 className='text-xl font-semibold'>좋아요한 클래식</h2>
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