import { useState } from 'react';

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add tag
  const addTag = e => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();

      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
        setInputValue(''); // Clear the input field
      }
    }
  };

  // Remove tag
  const removeTag = tagToRemove => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="">
      <label htmlFor="tag-input" className="block text-sm font-medium mb-2">
        Tags
      </label>

      {/* Input Field for Tags */}
      <div className="flex flex-wrap gap-2 p-2 border border-gray-600 rounded bg-gray-700">
        {tags.map((tag, index) => (
          <span key={index} className="flex items-center px-2 py-1 text-sm bg-green-600 rounded-full">
            {tag}
            <button className="ml-2 text-white hover:text-red-500" onClick={() => removeTag(tag)}>
              ×
            </button>
          </span>
        ))}
        <input id="tag-input" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={addTag} placeholder="Add a tag and press Enter" className="flex-grow p-2 text-sm bg-transparent focus:outline-none text-gray-200" />
      </div>
      <p className="mt-2 text-sm text-gray-400">Press Enter to add tags</p>
    </div>
  );
};

export default TagInput;
