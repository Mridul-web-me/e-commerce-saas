import { Layers } from 'lucide-react';
import React from 'react';

export const LargeCard = ({ data }) => {
  return (
    <div className={`rounded-lg shadow-md p-8 flex items-center flex-col gap-2 ${data.color} text-white`}>
      <Layers />
      <h4>{data.title}</h4>
      <h2 className="lg:text-3xl text-2xl">UGX.{data.sales}</h2>
    </div>
  );
};
