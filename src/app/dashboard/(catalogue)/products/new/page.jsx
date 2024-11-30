'use client';

import { FormHeader } from '@/components/FormComponents/FormHeader';
import ImageInput from '@/components/FormComponents/ImageInput';
import SubmitButton from '@/components/FormComponents/SubmitButton';
import { makePostRequest } from '@/lib/apiRequest';
import { useForm } from 'react-hook-form';
import { useState, useCallback } from 'react';

const generateSlug = title =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const InputField = ({ id, label, type = 'text', error, register, validation }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-900 dark:text-gray-50 py-2">
      {label}
    </label>
    <div className="relative mt-1">
      <input id={id} type={type} {...register(id, validation)} className={`block w-full py-3 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error ? 'border-red-500' : 'border-gray-300'}`} placeholder={`Enter ${label}`} />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  </div>
);
const InputTextArea = ({ id, label, type = 'text', error, register, validation }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-900 dark:text-gray-50 py-2">
      {label}
    </label>
    <div className="relative mt-1">
      <textarea id={id} type={type} {...register(id, validation)} className={`block w-full py-3 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error ? 'border-red-500' : 'border-gray-300'}`} placeholder={`Enter ${label}`} />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  </div>
);

const Page = ({ isLoading, tags: initialTags = [] }) => {
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      productTitle: '',
      description: '',
      productSKU: '',
      productBarcode: '',
      productPrice: '',
      productSellPrice: '',
      category: '',
      tags: initialTags,
      imageUrl: ''
    }
  });

  const categories = [
    { id: 1, title: 'Category1' },
    { id: 2, title: 'Category2' },
    { id: 3, title: 'Category3' },
    { id: 4, title: 'Category4' },
    { id: 5, title: 'Category5' },
    { id: 6, title: 'Category6' }
  ];

  const addTag = e => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();

      if (!tags.includes(inputValue.trim())) {
        const newTags = [...tags, inputValue.trim()];
        setTags(newTags);
        setValue('tags', newTags);
        setInputValue('');
      }
    }
  };

  const removeTag = tagToRemove => {
    const newTags = tags.filter(tag => tag !== tagToRemove);
    setTags(newTags);
    setValue('tags', newTags);
  };

  const onSubmit = useCallback(
    async data => {
      setLoading(true);
      try {
        const slug = generateSlug(data.productTitle);
  
        // Include the `isActive` state in the payload
        const payload = { ...data, slug, isActive };
  
        console.log('Submitted Form Data:', payload);
  
        await makePostRequest(setLoading, '/api/products', payload, 'Category');
  
        // Reset form fields and state
        setValue('productTitle', '');
        setValue('description', '');
        setValue('imageUrl', '');
        setTags([]);
        setValue('tags', []);
        setIsActive(false);
      } finally {
        setLoading(false);
      }
    },
    [setValue, isActive] // Add `isActive` to the dependency array
  );

  return (
    <div>
      <FormHeader title="New Category" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:gap-6">
          <InputField
            id="productTitle"
            label="Product Title"
            register={register}
            error={errors.productTitle}
            validation={{
              required: 'Product Title is required'
            }}
          />
          <div>
            <label htmlFor="category" className="block text-sm font-medium py-2 text-gray-900 dark:text-gray-50">
              Category
            </label>
            <select id="category" {...register('category', { required: 'Category is required' })} className="w-full p-3 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-green-500 focus:border-green-500">
              <option value="" disabled>
                Select Category
              </option>
              {categories.map(category => (
                <option key={category.id} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
            {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>}
          </div>
          <InputTextArea
            id="description"
            label="Product Description"
            type="textarea"
            register={register}
            error={errors.description}
            validation={{
              required: 'Product Description is required'
            }}
          />
          <InputField
            id="productSKU"
            label="Product SKU"
            register={register}
            error={errors.productSKU}
            validation={{
              required: 'Product SKU is required'
            }}
          />
          <InputField
            id="productBarcode"
            label="Product Barcode"
            register={register}
            error={errors.productBarcode}
            validation={{
              required: 'Product Barcode is required'
            }}
          />
          <InputField
            id="productPrice"
            label="Product Price"
            type="number"
            register={register}
            error={errors.productPrice}
            validation={{
              required: 'Product Price is required'
            }}
          />
          <InputField
            id="productSellPrice"
            label="Product Sell Price"
            type="number"
            register={register}
            error={errors.productSellPrice}
            validation={{
              required: 'Product Sell Price is required'
            }}
          />
          <div>
            <label htmlFor="tag-input" className="block text-sm font-medium mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 p-2 border border-gray-600 rounded bg-gray-700">
              {tags.map((tag, index) => (
                <span key={index} className="flex items-center px-2 py-1 text-sm bg-green-600 rounded-full">
                  {tag}
                  <button type="button" className="ml-2 text-white hover:text-red-500" onClick={() => removeTag(tag)}>
                    ×
                  </button>
                </span>
              ))}
              <input id="tag-input" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={addTag} placeholder="Add a tag and press Enter" className="flex-grow p-2 text-sm bg-transparent focus:outline-none text-gray-200" />
            </div>
            <p className="mt-2 text-sm text-gray-400">Press Enter to add tags</p>
          </div>
          <ImageInput
            imageUrl={watch('imageUrl')}
            setImageUrl={url => setValue('imageUrl', url)}
            endpoint="productImageUploader"
            label="Product Images"
            error={errors.imageUrl}
            validation={{
              required: 'Product Image is required'
            }}
          />
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={isActive} onChange={e => setIsActive(e.target.checked)} />
          <div
            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
        after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
        after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{isActive ? 'Active' : 'Draft'}</span>
        </label>
        <SubmitButton isLoading={loading} title="Save Category" />
      </form>
    </div>
  );
};

export default Page;
