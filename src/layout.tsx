// src/layout.tsx
// import './styles/global.css';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* 这里可以添加企业的Header、Sidebar等公共组件 */}
        {children}
      </body>
    </html>
  );
}
