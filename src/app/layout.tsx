import './globals.css';
import Providers from './Providers';
import { siteConfig } from '@/config/site';
import Layout from '@/components/layout/Layout';
import createClient from '@/lib/supabase/supabase-server';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { ToastifyProvider } from '@/components/providers/ToastifyProvider';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient();

  const { data: { session } } = await supabase.auth.getSession();
  const accessToken = session?.access_token ?? null;

  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthProvider accessToken={accessToken}>
            <ToastifyProvider>
              <Layout>
                {children}
              </Layout>
            </ToastifyProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  )
}
