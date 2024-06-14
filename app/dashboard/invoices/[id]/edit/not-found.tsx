/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2024-06-14 13:52:06
 * @LastEditTime: 2024-06-14 13:52:12
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \nextjs-dashboard\app\dashboard\invoices\[id]\edit\not-found.tsx
 * Copyright (c) 2024 by yangliwei, All Rights Reserved. 
 * @Description: 
 */
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}