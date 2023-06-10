import './globals.css';
import Layout from '@/components/layout/Layout';
import Providers from './Providers';
import { AuthProvider } from '@/components/AuthProvider';
import createClient from '@/lib/supabase/supabase-server';

export const metadata = {
  title: '클메',
  description: '당신의 클래식 메이트! 다양한 클래식 정보들을 소개합니다 :)',
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
