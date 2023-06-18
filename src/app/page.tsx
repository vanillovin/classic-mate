import { createServerClient } from '@/utils/supabase-server'

export default async function HomePage() {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <div className="p-4">
      <h1 className='underline p-1 font-bold'>Hello, {session?.user.email}</h1>
    </div>
  );
}