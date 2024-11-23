'use client';
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const WeeklySales = () => {
  // Sample data
  const data = [
    { name: 'Jan', sales: 400, orders: 240 },
    { name: 'Feb', sales: 300, orders: 139 },
    { name: 'Mar', sales: 500, orders: 320 },
    { name: 'Apr', sales: 700, orders: 410 },
    { name: 'May', sales: 600, orders: 380 },
    { name: 'Jun', sales: 800, orders: 500 }
  ];

  const tabs = [
    { title: 'Sales', type: 'sales' },
    { title: 'Orders', type: 'orders' }
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className="bg-white dark:bg-slate-700 p-2 rounded-lg z-0 shadow-xl">
      <h2 className="text-xl font-bold p-4 text-black dark:text-white">Best Selling Product</h2>
      <div className="p-4">
        {/* Tabs */}
        <div className="border-b border-gray-200 text-sm font-medium text-center text-gray-400">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => (
              <li className="me-2" key={i}>
                <button onClick={() => setChartToDisplay(tab.type)} className={chartToDisplay === tab.type ? 'inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500' : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-100 dark:hover:text-gray-100'}>
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Chart */}
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* Display only the selected data */}
            {chartToDisplay === 'sales' && <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" name="Sales" />}
            {chartToDisplay === 'orders' && <Area type="monotone" dataKey="orders" stroke="#82ca9d" fill="#82ca9d" name="Orders" />}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
