'use client';

import { FormHeader } from '@/components/FormComponents/FormHeader';
import ImageInput from '@/components/FormComponents/ImageInput';
import SubmitButton from '@/components/FormComponents/SubmitButton';
import { makePostRequest } from '@/lib/apiRequest';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Helper function to generate a slug
// const generateCouponCode = coupons => {
//   return coupons
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters
//     .replace(/\s+/g, '-') // Replace spaces with hyphens
//     .replace(/-+/g, '-'); // Collapse consecutive hyphens
// };

const Page = ({ isLoading }) => {
  const [couponTitle, setCouponTitle] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [errors, setErrors] = useState({ category: '', couponCode: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    // Initialize errors
    const newErrors = {
      coupons: couponTitle.trim() ? '' : 'Coupon Title is required.',
      couponCode: couponTitle.trim() ? '' : 'Coupon Code is required.',
      expiryDate: couponCode.trim() ? '' : 'Coupon Expiry date is required.'
    };

    setErrors(newErrors);

    // Stop submission if there are errors
    if (newErrors.category || newErrors.couponCode) {
      return;
    }

    // Generate slug from the category title
    // const couponCode = generateCouponCode(coupons);

    // Prepare data object
    const data = {
      couponTitle,
      couponCode,
      expiryDate
    };
    makePostRequest(setLoading, '/api/coupons', data, 'Coupons');
    setCouponTitle('');
    setCouponCode('');
    setExpiryDate('');

    console.log(data); // Log the data for debugging

    // Example: Sending data to an API
    // const response = await fetch('/api/categories', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });

    // if (response.ok) {
    //   console.log('Category saved successfully!');
    //   setLoading(true);
    // } else {
    //   console.error('Failed to save category.');
    // }
  };

  return (
    <div>
      <FormHeader title="New Category" />
      <form onSubmit={handleSubmit} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:gap-6">
          <div className="flex-grow">
            {/* Category Input */}
            <label htmlFor="category" className="block text-sm font-medium leading-6 dark:text-gray-50 text-gray-900 py-2">
              Coupon Title
            </label>
            <div className="relative mt-1">
              <input type="text" id="category" value={couponTitle} onChange={e => setCouponTitle(e.target.value)} className={`block py-3 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full ${errors.coupons ? 'border-red-500' : 'border-gray-300'}`} placeholder="Type the category title" />
              {errors.coupons && <p className="mt-1 text-sm text-red-500">{errors.coupons}</p>}
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex-grow">
                <label htmlFor="category" className="block text-sm font-medium leading-6 dark:text-gray-50 text-gray-900 py-2">
                  Coupon Code
                </label>
                <div className="relative mt-1">
                  <input type="text" id="category" value={couponCode} onChange={e => setCouponCode(e.target.value)} className={`block py-3 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full ${errors.couponCode ? 'border-red-500' : 'border-gray-300'}`} placeholder="Type the category title" />
                  {errors.couponCode && <p className="mt-1 text-sm text-red-500">{errors.couponCode}</p>}
                </div>
              </div>
              <div className="flex-grow">
                <label htmlFor="category" className="block text-sm font-medium leading-6 dark:text-gray-50 text-gray-900 py-2">
                  Coupon Expiry Date
                </label>
                <div className="relative mt-1">
                  <input type="date" id="category" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} className={`block py-3 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'}`} placeholder="Type the category title" />
                  {errors.expiryDate && <p className="mt-1 text-sm text-red-500">{errors.expiryDate}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubmitButton isLoading={loading} title="Save Coupons" />
      </form>
    </div>
  );
};

export default Page;
