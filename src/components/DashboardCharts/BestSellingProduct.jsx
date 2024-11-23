'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const BestSellingProduct = () => {
  const data = {
    labels: ['Cabbage', 'Watermelon', 'Broccoli', 'Maize'],
    datasets: [
      {
        label: '# of Votes',
        data: [40, 10, 20, 20],
        backgroundColor: ['rgb(0, 149, 99)', 'rgb(0, 159, 183)', 'rgb(219, 106, 0)', 'rgba(201, 214, 13, 0.914)'],
        borderColor: ['rgb(17, 219, 151)', 'rgb(31, 207, 234)', 'rgb(235, 157, 84)', 'rgba(205, 213, 97, 0.914)'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };

  return (
    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-xl">
      <h2 className="text-lg font-bold text-black shadow-md dark:text-white mb-4">Best Selling Product</h2>
      <div
        className="relative w-96 h-72 mx-auto flex justify-center items-center flex-col mt-20
      "
      >
        {/* Adjust width and height here */}
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};
