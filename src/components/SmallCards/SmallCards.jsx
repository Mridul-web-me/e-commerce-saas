import React from 'react';
import { Check, CheckCheck, Layers, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export const SmallCards = () => {
  const data = [
    {
      title: 'Total order',
      sales: 110,
      iconBg: 'bg-green-600',
      icon: ShoppingCart
    },
    {
      title: 'Orders Pending',
      sales: 110,
      iconBg: 'bg-blue-600',
      icon: Loader2
    },
    {
      title: 'Orders Processing',
      sales: 13210,
      iconBg: 'bg-orange-600',
      icon: RefreshCcw
    },
    {
      title: 'Orders Delivered',
      sales: 110,
      iconBg: 'bg-purple-600',
      icon: CheckCheck
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-4 py-8">
      {data.map((stat, i) => (
        <div className={`rounded-lg flex space-x-3 gap-4 shadow-lg dark:bg-slate-700 p-8 dark:text-white`} key={i}>
          {/* <Image src={stat.icon} width={20} height={20} /> */}

          <div className={`w-12 h-12 ${stat.iconBg} rounded-full items-center flex justify-center`}>
            <stat.icon />
          </div>

          <div className="">
            <p className="text-black dark:text-gray-50">{stat.title}</p>
            <h3 className="text-2xl text-black dark:text-gray-50 font-bold">{stat.sales}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
