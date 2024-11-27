import React from 'react';
import { Heading } from '../Heading/Heading';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const PageHeader = ({ title, linkTitle, href }) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b border-slate-500">
        <Heading title={title} />
        <Link className="text-white bg-green-700 hover:bg-green-700/90 focus:ring-4 focus:outline-none focus:ring-lime60bg-green-700/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 text-base space-x-3" href={href}>
          <Plus />
          <span>{linkTitle}</span>
        </Link>
      </div>
      {/* Header */}
      {/* Table */}
    </div>
  );
};

export default PageHeader;
