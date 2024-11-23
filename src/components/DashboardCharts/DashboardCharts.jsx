import React from 'react';
import { WeeklySales } from './WeeklySales';
import { BestSellingProduct } from './BestSellingProduct';

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <WeeklySales />
      <BestSellingProduct />
    </div>
  );
};
