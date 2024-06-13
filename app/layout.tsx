/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2024-06-13 11:34:33
 * @LastEditTime: 2024-06-13 13:39:05
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \nextjs-dashboard\app\layout.tsx
 * Copyright (c) 2024 by yangliwei, All Rights Reserved. 
 * @Description: 
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
