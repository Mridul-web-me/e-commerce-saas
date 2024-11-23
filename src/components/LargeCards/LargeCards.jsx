import React from 'react';
import { LargeCard } from './LargeCard';
import { Layers } from 'lucide-react';
import Image from 'next/image';

export const LargeCards = () => {
  const orderStats = [
    {
      title: 'Today Orders',
      sales: 110,
      color: 'bg-green-600',
      icon: Layers
    },
    {
      title: 'Yesterday Ordrs',
      sales: 110,
      color: 'bg-blue-600',
      icon: Layers
    },
    {
      title: 'This Month Orders',
      sales: 13210,
      color: 'bg-orange-600',
      icon: Layers
    },
    {
      title: 'Last Months Orders',
      sales: 110,
      color: 'bg-purple-600',
      icon: Layers
    },
    {
      title: 'All-Time Sales',
      sales: 110,
      color: 'bg-purple-600',
      icon: Layers
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 sm:grid-cols-2 gap-4 py-8">
      {orderStats.map((stat, i) => (
        <div className={`rounded-lg shadow-md p-8 flex items-center flex-col gap-2 ${stat.color} text-white`} key={i}>
          {/* <Image src={stat.icon} width={20} height={20} /> */}
          <stat.icon />
          <h4>{stat.title}</h4>
          <h2 className="lg:text-3xl text-2xl">UGX.{stat.sales}</h2>
        </div>
      ))}
    </div>
  );
};
