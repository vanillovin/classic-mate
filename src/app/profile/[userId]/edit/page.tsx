import { createServerClient } from '@/utils/supabase-server';

export default async function ProfileEditPage() {
  async function editProfile(formData: FormData) {
    'use server';
    
    const supabase = createServerClient();
    const { data: { user } } =await supabase.auth.getUser();
    const inputData = Object.fromEntries(formData);
    const { data, error } = await supabase
      .from('profiles')
      .update(inputData)
      .eq('id', user?.id);
    // console.log(data, error);
    // if (!error) revalidatePath(`/`);
  }

  return (
    <div>
      <h2 className='font-semibold text-2xl'>회원정보수정</h2>
      <form
        action={editProfile}
        className='grid grid-cols-[20%_80%] gap-y-4 mt-8'
      >
        <label htmlFor='nickname' className='font-medium'>닉네임</label>
        <input 
          id='nickname' 
          name='nickname' 
          className='px-2 py-1 rounded-sm shadow-sm' 
          minLength={3}
          maxLength={10}
          required
        />
      
        <label htmlFor='fullName' className='font-medium'>성명</label>
        <input 
          id='fullName' 
          name='full_name' 
          className='px-2 py-1 rounded-sm shadow-sm' 
          minLength={2}
          maxLength={30}
          required
        />
      
        <label htmlFor='website' className='font-medium'>웹사이트</label>
        <input
          type='url'
          id='website' 
          name='website' 
          className='px-2 py-1 rounded-sm shadow-sm'
          minLength={10}
        />
      
        <label htmlFor='description' className='font-medium'>자기소개</label>
        <input 
          id='description' 
          name='description' 
          className='px-2 py-1 rounded-sm shadow-sm' 
          minLength={2}
          maxLength={40}
        />

        {/* <label htmlFor='avatarUrl' className='font-medium'>프로필 사진</label>
        <input id='avatarUrl' name='avatar_url' className='px-2 py-1 rounded-sm shadow-sm' /> */}

        <button className='p-2 font-semibold shadow-sm col-span-2 rounded-sm hover:bg-[#294057] text-white bg-[#436A93]'>
          확인
        </button>
      </form>
    </div>
  );
}
