export default function TextInput({ title, errors, isRequired = true, type = 'text', className = 'sm:col-span-2', defaultValue = '' }) {
  return (
    // <div className={className}>
    //   <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900 mb-2 ">
    //     {label}
    //   </label>
    //   <div className="mt-2">
    //     <input {...register(`${name}`, { required: isRequired })} type={type} name={name} id={name} defaultValue={defaultValue} autoComplete={name} className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder={`Type the ${label.toLowerCase()}`} />
    //     {errors[`${name}`] && <span className="text-sm text-red-600 ">{label} is required</span>}
    //   </div>
    // </div>

    <div className={className}>
      <label htmlFor="category" className="block text-sm font-medium leading-6 dark:text-gray-50 text-gray-900 py-2">
        {title}
      </label>
      <div className="relative mt-1">
        <input type="text" id="category" isRequired={isRequired} value={defaultValue} className={`block py-3 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full ${errors.defaultValue ? 'border-red-500' : 'border-gray-300'}`} placeholder="Type the category title" />
        {errors.defaultValue && <p className="mt-1 text-sm text-red-500">{errors.defaultValue}</p>}
      </div>
    </div>
  );
}
