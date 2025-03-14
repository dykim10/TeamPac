import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마라톤 대회 관리 시스템',
  description: '전국의 마라톤 대회 정보를 한 곳에서 관리하고 참가할 수 있는 서비스입니다.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
