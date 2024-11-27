'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export const FormHeader = ({ title }) => {
  const router = useRouter();
  return (
    <div className="flex item-center justify-between py-6 px-12 dark:bg-slate-700 dark:text-white text-gray-800 shadow-md rounded-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button onClick={() => router.back()} className="rounded-xl">
        <X />
      </button>
    </div>
  );
};
