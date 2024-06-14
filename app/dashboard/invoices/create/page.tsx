/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2024-06-14 09:06:21
 * @LastEditTime: 2024-06-14 09:07:42
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \nextjs-dashboard\app\dashboard\invoices\create\page.tsx
 * Copyright (c) 2024 by yangliwei, All Rights Reserved. 
 * @Description: 
 */
/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2024-06-14 09:06:21
 * @LastEditTime: 2024-06-14 09:06:31
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \nextjs-dashboard\app\dashboard\invoices\create\page.tsx
 * Copyright (c) 2024 by yangliwei, All Rights Reserved. 
 * @Description: 
 */
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}