import './globals.css';
import type { Metadata } from 'next';
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

import { siteConfig } from '@/config/site';
import Layout from '@/components/layout/Layout';
import { createServerClient } from '@/utils/supabase-server';
import Providers from './Providers';
import { AuthProvider } from '@/components/providers/auth-provider';
import SupabaseProvider from '@/components/providers/supabase-provider';
import SupabaseListener from '@/components/providers/supabase-listener';
import { ToastifyProvider } from '@/components/providers/toastify-provider';

export type TypedSupabaseClient = SupabaseClient;

export const metadata: Metadata = siteConfig['metaData'].home;

// do not cache this page
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  return (
    <html>
      <body className='no-scrollbar'>
        <Providers>
          <SupabaseProvider session={session}>
            <SupabaseListener serverAccessToken={session?.access_token} />
            <AuthProvider session={session}>
              <ToastifyProvider>
                <Layout>
                  {children}
                </Layout>
              </ToastifyProvider>
            </AuthProvider>
          </SupabaseProvider>
        </Providers>
      </body>
    </html>
  )
}
