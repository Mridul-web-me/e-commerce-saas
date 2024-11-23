import { Navbar } from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* HEader */}
        <Navbar />
        <main className="p-8 bg-white dark:bg-slate-950 text-slate-50 min-h-screen mt-16 ml-60">{children}</main>
        {/* Main */}
      </div>
      {/* Main Body */}
    </div>
  );
}
