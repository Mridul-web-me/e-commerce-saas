import DataTable from '@/components/DataTable/DataTable';
import { Heading } from '@/components/Heading/Heading';
import PageHeader from '@/components/PageHeader/PageHeader';
import { Download, Plus, Search, SearchCheck, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      {/* Header */}
      <PageHeader title="Categories" linkTitle="Add Category" href="/dashboard/categories/new" />
      {/* Table */}
      <div className="flex py-4 px-12 justify-between items-center gap-8 bg-slate-700 rounded-lg">
        <button className="relative flex gap-3 items-center justify-center py-3 px-4 overflow-hidden text-base font-medium text-gray-400 rounded-lg group bg-gradient-to-br bg-slate-900 border border-green-800">
          <Download />
          Export
        </button>
        <div className=" flex-grow  ">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input type="text" id="table-search" className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full" placeholder="Search for items" />
          </div>
        </div>
        <button className="flex items-center space-x-2 bg-red-600 text-white rounded-lg px-6 py-3">
          <Trash2 />
          <span>Bulk Delete</span>
        </button>
      </div>

      <div className="py-8">
        <h2>Table</h2>
        <DataTable />
      </div>
    </div>
  );
};

export default page;
