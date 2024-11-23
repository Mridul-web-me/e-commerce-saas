import { DashboardCharts } from '@/components/DashboardCharts/DashboardCharts';
import DataTable from '@/components/DataTable/DataTable';

import { Heading } from '@/components/Heading/Heading';
import { LargeCards } from '@/components/LargeCards/LargeCards';
import { SmallCards } from '@/components/SmallCards/SmallCards';
// import { LargeCards } from '@/components/LargeCards/LargeCards';
import React from 'react';

const page = () => {
  return (
    <div className="">
      <Heading title="Dashboard Overview" />
      <DashboardCharts />
      <LargeCards />
      {/* Small cards */}
      <SmallCards />
      {/* Charts */}
      {/* Table for orders */}
      <DataTable />
    </div>
  );
};

export default page;
