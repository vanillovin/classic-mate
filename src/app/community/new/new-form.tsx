'use client';

import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { useSupabase } from '@/components/providers/supabase-provider';

function NewForm({ profile }: { profile: Profile }) {
  const router = useRouter();
  const { supabase } = useSupabase();

  async function addNewPost(formData: FormData) {
    const formDataObj = Object.fromEntries(formData);
    const id = uuidv4();
    const { error } = await supabase
      .from('test_posts')
      .insert({
        ...formDataObj,
        id,
        user_id: profile.id,
        nickname: profile.nickname
      });
    if (!error) router.push(`/community/${id}`);
    else toast.error(`게시글을 올리지 못했습니다.`);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewPost(new FormData(e.currentTarget));
      }}
      className="grid grid-cols-1 gap-y-4"
    >
      <div className='space-y-1'>
        <label htmlFor="category" className='font-medium'>카테고리</label>
        <select
          name='category_name'
          id="category"
          className="w-full block p-2 rounded-sm border focus:outline-none focus:border-black"
          required
        >
          <option>카테고리를 선택해주세요.</option>
          <option value="자유">자유</option>
          <option value="클래식">클래식</option>
        </select>
      </div>
      <div>
        <label htmlFor="title" className='font-medium'>제목</label>
        <input 
          id="title"
          name="title" 
          placeholder="제목을 입력해주세요."
          className="w-full block p-2 rounded-sm border focus:outline-none focus:border-black"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className='font-medium'>내용</label>
        <textarea 
          id="content"
          name="content" 
          placeholder="내용을 입력해주세요."
          className="w-full block p-2 rounded-sm border h-80 max-h-96 focus:outline-none focus:border-black"
          required
        />
      </div>
      <div className="flex items-center gap-x-2 font-medium text-white justify-end">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 transition-colors bg-pantone-biscotti hover:bg-pantone-latte"
        >
          취소
        </button>
        <button
          type="submit"
          className="px-4 py-2 transition-colors bg-pantone-toffee hover:bg-pantone-cocoa"
        >
          등록
        </button>
      </div>
    </form>
  )
}

export default NewForm;