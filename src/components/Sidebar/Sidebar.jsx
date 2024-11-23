'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AlertTriangle, BarChart, Bell, BookOpen, ClipboardList, Grid, Heart, Home, Image, List, LogOut, Mail, MapPin, PieChart, ShoppingCart, User, Calendar, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const Sidebar = ({ expandedDropdown, setExpandedDropdown, isSidebarOpen, setIsSidebarOpen }) => {
  const pathname = usePathname();

  const sidebarLinks = [
    { title: 'Overview', url: '/dashboard', icon: Home },
    {
      title: 'Catalogue',
      icon: Grid,
      dropdown: [
        { title: 'Category 1', url: '/catalogue/category-1' },
        { title: 'Category 2', url: '/catalogue/category-2' },
        { title: 'Category 3', url: '/catalogue/category-3' },
        { title: 'Category 4', url: '/catalogue/category-4' }
      ]
    },
    { title: 'Widgets', url: '/under-constractions', icon: Grid },
    { title: 'Ui Elements', url: '/under-constractions', icon: List },
    { title: 'Advanced Ui', url: '/under-constractions', icon: BarChart },
    { title: 'Form Elements', url: '/under-constractions', icon: List },
    { title: 'Charts', url: '/under-constractions', icon: PieChart },
    { title: 'Notifications', url: '#', icon: Bell },
    { title: 'Icons', url: '/under-constractions', icon: Heart },
    { title: 'Maps', url: '/under-constractions', icon: MapPin },
    { title: 'User Pages', url: '/dashboard/staff', icon: User },
    { title: 'Error Pages', url: '/under-constractions', icon: AlertTriangle },
    { title: 'E-Commerce', url: '/products', icon: ShoppingCart },
    { title: 'E-mail', url: '/under-constractions', icon: Mail },
    { title: 'Calendar', url: '/under-constractions', icon: Calendar },
    { title: 'Todo List', url: '/todo-list', icon: ClipboardList },
    { title: 'Gallery', url: '/under-constractions', icon: Image },
    { title: 'Documentations', url: '/under-constractions', icon: BookOpen }
  ];

  const toggleDropdown = title => {
    setExpandedDropdown(expandedDropdown === title ? null : title);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? 'translate-x-0 top-20 ' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 bg-white border-r-2  
        dark:bg-slate-800 w-64 h-screen fixed left-0 lg:top-0 flex flex-col z-40`}
      >
        <Link className="mb-6 text-4xl font-bold dark:text-gray-50 text-black px-3 py-2" href="#">
          CroBoost
        </Link>

        {/* Scrollable Links */}
        <div className="overflow-y-scroll flex-grow space-y-3 px-3 text-black dark:text-white">
          {sidebarLinks.map((link, i) => {
            if (link.dropdown) {
              // Handle dropdown
              return (
                <div key={i} className="flex flex-col">
                  <button onClick={() => toggleDropdown(link.title)} className={`flex items-center justify-between gap-2 px-3 py-2 border-l-4 ${pathname.startsWith('/catalogue') ? 'border-green-600 text-green-600 font-bold' : 'border-transparent'} hover:text-green-600`}>
                    <div className="flex items-center gap-2">
                      <link.icon />
                      {link.title}
                    </div>
                    {expandedDropdown === link.title ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  {expandedDropdown === link.title && (
                    <div className="ml-6 space-y-2">
                      {link.dropdown.map((subLink, j) => (
                        <Link key={j} href={subLink.url} className={`block px-4 py-1 border-l-2 ${pathname === subLink.url ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600 dark:text-gray-300'} hover:text-green-600`}>
                          {subLink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Render regular links
            return (
              <Link key={i} href={link.url} className={`flex items-center gap-2 px-3 py-2 border-l-4 ${pathname === link.url ? 'border-green-600 text-green-600 font-bold' : 'border-transparent'} hover:text-green-600`}>
                <link.icon />
                {link.title}
              </Link>
            );
          })}
        </div>

        {/* Logout Button */}
        <div className="mt-auto p-3">
          <Button className="bg-green-600 p-3 w-full flex items-center gap-2">
            <LogOut />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
