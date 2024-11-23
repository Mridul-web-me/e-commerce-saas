'use client';
import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';

const DataTable = () => {
  const itemsPerPage = 5; // Rows per page
  const [currentPage, setCurrentPage] = useState(1);

  const tableData = [
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' },
    { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { name: 'Apple iMac 27', color: 'Silver', category: 'PC Desktop', price: '$3999' },
    { name: 'Dell XPS 15', color: 'Gray', category: 'Laptop', price: '$2399' },
    { name: 'Samsung Galaxy Tab', color: 'Black', category: 'Tablet', price: '$599' }
  ];

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Paginated data
  const paginatedData = tableData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = page => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <h2 className="text-xl text-black dark:text-white font-bold p-4">Best Selling Product</h2>
      <div className="p-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left  text-gray-500">
            <thead className="text-xs dark:text-gray-50  dark:bg-slate-900">
              <tr>
                <th className="p-4">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Color</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {paginatedData.map((item, index) => (
                <tr key={index} className="dark:text-gray-50 border dark:border-slate-950 dark:bg-slate-700 border-b hover:bg-gray-50 dark:hover:bg-slate-600">
                  <td className="p-4">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4">{item.color}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-blue-600 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing {Math.min((currentPage - 1) * itemsPerPage + 1, tableData.length)} to {Math.min(currentPage * itemsPerPage, tableData.length)} of {tableData.length}
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button onClick={handlePrevious} disabled={currentPage === 1} className={`px-3 py-1 border border-gray-800 rounded ${currentPage === 1 ? 'text-gray-500' : 'text-gray-300 hover:bg-gray-200'}`}>
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <li key={idx}>
                  <button onClick={() => handlePageClick(idx + 1)} className={`px-3 py-1 border border-gray-800 rounded ${currentPage === idx + 1 ? 'bg-gray-500 text-white' : 'text-gray-500 hover:bg-gray-200'}`}>
                    {idx + 1}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={handleNext} disabled={currentPage === totalPages} className={`px-3 py-1 border border-gray-800 rounded ${currentPage === totalPages ? 'text-gray-500' : 'text-gray-300 hover:bg-gray-200'}`}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
