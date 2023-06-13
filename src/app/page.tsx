import NewTodo from './new-todo';
import Login from '@/components/Login';
import { redirect } from 'next/navigation';
import { createServerClient } from '@/utils/supabase-server'
import RealtimeTodos from './realtime-todos';

export default async function HomePage() {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  const { data: todos } = await supabase.from('todos').select();

  // if (!session) {
  //   redirect('/unathenticated');  
  // }

  return (
    <div className="p-4">
      <Login />
      <h1 className='underline p-1 font-bold'>Hello, {session?.user.email}</h1>
      {/* @ts-expect-error this will be fixed in TS */}
      <NewTodo />
      <RealtimeTodos todos={todos ?? []} />
    </div>
  )
}