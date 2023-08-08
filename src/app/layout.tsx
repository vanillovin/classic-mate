import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Layout from '@/components/layout/Layout';

import Providers from './Providers';
import { AuthProvider } from '@/components/providers/auth-provider';
import SupabaseProvider from '@/components/providers/supabase-provider';
import SupabaseListener from '@/components/providers/supabase-listener';

import { createServerClient } from '@/utils/supabase-server';
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs"
import { ToastifyProvider } from '@/components/providers/toastify-provider';

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
              <AuthProvider accessToken={session?.access_token ?? null}>
                <ToastifyProvider>
                  <Layout>
                    {children}
                  </Layout>
                </ToastifyProvider>
              </AuthProvider>
          </SupabaseProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </Providers>
      </body>
    </html>
  )
}
