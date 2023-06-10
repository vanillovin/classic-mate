import './globals.css';
import Layout from '@/components/layout/Layout';
import Providers from './Providers';
import { AuthProvider } from '@/components/AuthProvider';
import createClient from '@/lib/supabase/supabase-server';
import { siteConfig } from '@/config/site';

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
        <AuthProvider>
          <Providers>
            <Layout>
              {children}
           </Layout>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
