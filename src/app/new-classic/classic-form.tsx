'use client';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/components/providers/supabase-provider';
import { ChangeEvent, useState } from 'react';

export default function ClassicForm() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const [tags, setTags] = useState<string[]>([]);

  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newTag = e.currentTarget.value;
    if (e.key === 'Enter' && newTag) {
      setTags([...tags, newTag]);
      e.currentTarget.value = '';
    }
  };

  const handleDeleteTag = (tag: string) => {
    setTags(tags.filter(prevTag => prevTag !== tag));
  };

  const insertClassicData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = String(formData.get('title'));
    const genre = String(formData.get('genre'));
    const composer = String(formData.get('composer'));
    const year = String(formData.get('year'));
    const description = String(formData.get('description'));
    const cover_image = String(formData.get('cover_image'));
    const video_url = String(formData.get('video_url'));
    const { error } = await supabase.from('all_classics').insert({
      title, genre, composer, year: parseInt(year), description, cover_image, video_url, tags,
    });
  
    if (!error) {
      router.push('/classics');
      return toast.success('클래식을 성공적으로 추가했습니다~!');
    }
    return toast.error('클래식 추가를 실패했습니다~;');
  };
    
  return (
    <form
      onSubmit={insertClassicData}
      className="flex flex-col py-8 px-16 gap-y-2"
    >
      <input name="title" placeholder='title' className="rounded-sm border border-violet-200 p-1" required />
      <input name="genre" placeholder='genre' className="rounded-sm border border-violet-200 p-1" required />
      <input name="composer" placeholder='composer' className="rounded-sm border border-violet-200 p-1" required />
      <input type="number" name="year" placeholder='year' className="rounded-sm border border-violet-200 p-1" required />
      <textarea name="description" placeholder='description' className="rounded-sm border border-violet-200 p-1 h-16 max-h-24" required />
      <input name="cover_image" placeholder='cover_image' className="rounded-sm border border-violet-200 p-1" required />
      <input name="tags" placeholder='tags' className="rounded-sm border border-violet-200 p-1" onKeyDown={handleInputChange} />
      <ul className='flex items-center'>
        tags : 
        {tags.length > 0 && tags.map((tag) =>
          <li
            key={tag}
            className='bg-amber-200 rounded-sm px-1 mx-1 cursor-pointer'
            onClick={() => handleDeleteTag(tag)}
          >{tag}</li>
        )}
      </ul>
      <input name="video_url" placeholder='video_url' className="border border-violet-200 p-1" required />
      <button
        type="submit"
        className="p-2 bg-violet-500 rounded-sm text-amber-300 font-semibold"
      >클래식 추가하기</button>
    </form>
  );
}