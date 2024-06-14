/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2024-06-14 10:14:25
 * @LastEditTime: 2024-06-14 10:19:11
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \nextjs-dashboard\app\dashboard\invoices\[id]\edit\page.tsx
 * Copyright (c) 2024 by yangliwei, All Rights Reserved. 
 * @Description: 
 */
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  if (!invoice) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}