import './globals.css';
import Providers from './Providers';
import { createServerClient } from '@/utils/supabase-server';
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs"

import { siteConfig } from '@/config/site';
import Layout from '@/components/layout/Layout';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SupabaseProvider from '@/components/providers/supabase-provider';
import SupabaseListener from '@/components/providers/supabase-listener';
import { ToastifyProvider } from '@/components/providers/toastify-provider';

export type TypedSupabaseClient = SupabaseClient;

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

// do not cache this page
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  return (
    <html lang="en">
      <body className='example'>
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
          <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>
    </html>
  )
}
