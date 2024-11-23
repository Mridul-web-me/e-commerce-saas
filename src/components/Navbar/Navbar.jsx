'use client';
import { AlignJustify, Bell, CreditCard, Cross, Keyboard, LayoutDashboard, LogOut, Mail, Menu, MessageSquare, Plus, PlusCircle, Settings, Sun, User, UserPlus, Users, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { ThemeToggle } from '../ThemeSwitcher/ThemeSwitcher';
// import { ThemeSwitcher } from '../ThemeSwitcher';

export const Navbar = ({ expandedDropdown, setExpandedDropdown, isSidebarOpen, setIsSidebarOpen }) => {
  // const [expandedDropdown, setExpandedDropdown] = useState(null);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex border-b-2 items-center justify-between bg-white dark:bg-slate-900 text-slate-50 h-20 px-8 py-4 fixed top-0 w-full lg:ml-64 z-50 lg:pr-[20rem]">
      {/* Icon */}
      {/* <button onClick={() => setShowSideBar(!showSideBar)} className="text-green-600">
        <AlignJustify />
      </button> */}
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className=" z-50 bg-green-600 p-2 rounded-md text-white">
        <Menu className="w-5 h-5" />
      </button>
      {/* 3 icons */}
      <div className="flex items-center space-x-3 text-green-600">
        {/* <button>
          <Sun />
        </button> */}
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
                <Bell className="text-green-600" />
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-1 end-6 ">20</div>
              </button>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <div className="flex items-center space-x-3 px-2">
                  <div>
                    <Image width={200} height={200} className="w-8 h-8 rounded-full" src="" alt="A" />
                  </div>
                  <div className="">
                    <p className="py-2">Yellow sweet corn stock out,</p>
                    <div className="flex gap-2 items-center">
                      <p className="bg-red-700 text-white px-4 py-1 rounded-full ">Stock Out</p>
                      <p className="text-sm text-gray-400">Dec 12, 20024 - 12:40PM</p>
                    </div>
                  </div>
                  <X />
                </div>

                <DropdownMenuSeparator />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center space-x-3 px-2">
                  <div>
                    <Image width={200} height={200} className="w-8 h-8 rounded-full" src="" alt="A" />
                  </div>
                  <div
                    className="
                  "
                  >
                    <p className="py-2">Yellow sweet corn New Order,</p>
                    <div className="flex gap-2 items-center ">
                      <p className="bg-green-700 text-white px-4 py-1 rounded-full ">New Order</p>
                      <p className="text-sm text-gray-400">Dec 12, 20024 - 12:40PM</p>
                    </div>
                  </div>
                  <X />
                </div>

                <DropdownMenuSeparator />
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button>
                {/* <Image width={200} height={200} className="w-8 h-8 rounded-full" src="" alt="A" /> */}
                <User />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="py-2 px-4 pr-8">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <button className="flex items-center space-x-3">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="flex items-center space-x-3">
                    <Settings />
                    <span>Edit Profile</span>
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="flex items-center space-x-3">
                    <LogOut />
                    <span>Logout</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
