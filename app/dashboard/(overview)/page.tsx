/*
 * @Author: yangliwei 1280426581@qq.com
 * @Date: 2024-06-13 13:59:20
 * @LastEditTime: 2024-06-13 16:09:51
 * @LastEditors: yangliwei 1280426581@qq.com
 * @FilePath: \nextjs-dashboard\app\dashboard\page.tsx
 * Copyright (c) 2024 by yangliwei, All Rights Reserved.
 * @Description:
 */
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/font';
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from '@/app/lib/data';
const Page = async () => {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices} = await fetchCardData()
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
};
export default Page;
