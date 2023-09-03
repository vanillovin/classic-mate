import { redirect } from 'next/navigation';

import NewForm from './new-form';
import { toast } from 'react-toastify';
import { createServerClient } from '@/utils/supabase-server';

export default async function NewPostPage() {
  const supabase = createServerClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (!user) redirect('/unauthenticated');

  const { data: profiles, error: profilesError } = await supabase
    .from('profiles')
    .select()
    .eq('id', user?.id); 

  if (error || profilesError) {
    toast.error('문제가 발생했습니다.');
    redirect('/community');
  }

  return (
    <div className="px-6 sm:px-12 pt-6 sm:pt-12 pb-24">
      <NewForm profile={profiles[0]} />
    </div>
  );
}
