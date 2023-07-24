import { redirect } from 'next/navigation';

import { createServerClient } from '@/utils/supabase-server';
import NewForm from './new-form';

export default async function page() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: profiles } = await supabase
    .from('profiles')
    .select()
    .eq('id', user?.id);
  
  if (!user || !profiles) redirect('/unauthenticated');

  return (
    <div className="px-6 sm:px-12 pt-6 sm:pt-12 pb-24">
      <NewForm profile={profiles[0]} />
    </div>
  )
}
