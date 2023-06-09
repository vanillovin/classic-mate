import './globals.css';
import Layout from '@/components/layout/Layout';
import Providers from './Providers';

export const metadata = {
  title: '클메',
  description: '당신의 클래식 메이트! 다양한 클래식 정보들을 소개합니다 :)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <Providers>
            {/* ThemeProvider */}
            {children}
          </Providers>
        </Layout>
      </body>
    </html>
  )
}
