import React from 'react';
import { notFound, redirect, useParams } from 'next/navigation';
import { createServerClient } from '@/utils/supabase-server';
import Image from 'next/image';

export default async function ProfilePage({ params }: { params: { userId: string } }) {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  const { data } = await supabase.from('profiles').select().eq('id', params.userId);
  const profile = data?.[0];

  if (!session) redirect('/unauthenticated');
  if (!profile) return notFound();
  
  return (
    <section className='p-4'>
      <div className='bg-white bg-opacity-60 p-5 w-fit'>
        <div className='relative w-40 h-40 rounded-sm overflow-hidden'>
          <Image
            src={'/kylie-paz-cbl1K6yJlDI-unsplash.jpg'}
            alt=''
            fill={true}
            className='object-cover'
          />
        </div>
        <div className='p-1'>
          <p className='font-medium mt-2'>{profile.nickname}</p>
          <p className=''>{profile.website}</p>
          <p className=''>{profile.description}</p>
          <div className='flex gap-1 py-1'>
            <button className='bg-black text-white rounded-sm p-1'>회원정보수정</button>
            <button className='bg-white border rounded-sm p-1'>로그아웃</button>
          </div>
          <ul className=''>
          </ul>
        </div>
      </div>
    </section>
  );
}