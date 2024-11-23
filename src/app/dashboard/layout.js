'use client';
import { Navbar } from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { useState } from 'react';

export default function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar expandedDropdown={expandedDropdown} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setExpandedDropdown={setExpandedDropdown} />
      <div className="w-full">
        {/* HEader */}
        <Navbar expandedDropdown={expandedDropdown} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setExpandedDropdown={setExpandedDropdown} />
        <main className="p-8 bg-white dark:bg-slate-950 text-slate-50 min-h-screen xl:mt-16 lg:ml-64 ">{children}</main>
        {/* Main */}
      </div>
      {/* Main Body */}
    </div>
  );
}
