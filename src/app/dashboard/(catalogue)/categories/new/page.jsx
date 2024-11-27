'use client';

import { FormHeader } from '@/components/FormComponents/FormHeader';
import ImageInput from '@/components/FormComponents/ImageInput';
import SubmitButton from '@/components/FormComponents/SubmitButton';
import { makePostRequest } from '@/lib/apiRequest';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Helper function to generate a slug
const generateSlug = title => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Collapse consecutive hyphens
};

const Page = ({ isLoading }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({ category: '', description: '' });

  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    // Initialize errors
    const newErrors = {
      category: category.trim() ? '' : 'Category is required.',
      description: description.trim() ? '' : 'Description is required.'
    };

    setErrors(newErrors);

    // Stop submission if there are errors
    if (newErrors.category || newErrors.description) {
      return;
    }

    // Generate slug from the category title
    const slug = generateSlug(category);

    // Prepare data object
    const data = {
      category,
      description,
      slug,
      imageUrl
    };
    makePostRequest(setLoading, '/api/categories', data, 'Category');
    setCategory('');
    setDescription('');
    setImageUrl('');

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
              Category Title
            </label>
            <div className="relative mt-1">
              <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} className={`block py-3 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full ${errors.category ? 'border-red-500' : 'border-gray-300'}`} placeholder="Type the category title" />
              {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
            </div>

            {/* Description Input */}
            <label htmlFor="description" className="block text-sm font-medium leading-6 dark:text-gray-50 text-gray-900 py-2 mt-2">
              Category Description
            </label>
            <div className="relative mt-1">
              <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className={`block py-3 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full ${errors.description ? 'border-red-500' : 'border-gray-300'}`} placeholder="Type the description" />
              {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
            </div>
          </div>
          <ImageInput className="" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader" label="Category Image" />
        </div>
        <SubmitButton isLoading={loading} title="Save Category" />
      </form>
    </div>
  );
};

export default Page;
