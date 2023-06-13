import React from 'react';
import { redirect } from 'next/navigation';
import { createServerClient } from '@/utils/supabase-server';

export default async function ProfilePage() {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    redirect('/unauthenticated');
  }
  
  return <div>{session?.user.email}</div>
}