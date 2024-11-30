import PageHeader from '@/components/PageHeader/PageHeader';
import React from 'react';

const page = () => {
  return (
    <div>
      <PageHeader title="Products" linkTitle="Add Products" href="/dashboard/products/new" />
      <p>Add you product and necessary information from here</p>
    </div>
  );
};

export default page;
