/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2024-06-14 13:48:47
 * @LastEditTime: 2024-06-14 13:48:55
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \nextjs-dashboard\app\dashboard\invoices\error.tsx
 * Copyright (c) 2024 by yangliwei, All Rights Reserved. 
 * @Description: 
 */
'use client';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}