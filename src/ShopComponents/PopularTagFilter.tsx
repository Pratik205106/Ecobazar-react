// src/components/PopularTagFilter.tsx

import { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

// Array of tags to display. This makes the component easy to update.
const tags = [
  'Healthy', 'Low fat', 'Vegetarian',
  'Kid foods', 'Vitamins', 'Bread',
  'Meat', 'Snacks', 'Tiffin',
  'Launch', 'Dinner', 'Breakfast', // Corrected "Breackfast" typo from image
  'Fruit'
];

const PopularTagFilter = () => {
  // State to keep track of the selected tag. 'Low fat' is selected by default to match the image.
  const [selectedTag, setSelectedTag] = useState<string | null>('Low fat');

  // Handles clicking on a tag
  const handleTagClick = (tag: string) => {
    // If the clicked tag is already selected, deselect it. Otherwise, select the new tag.
    setSelectedTag(currentTag => (currentTag === tag ? null : tag));
  };

  return (
    <div className="p-4 bg-white w-full max-w-sm font-sans">
      {/* Header Section */}
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">Popular Tag</h3>
        <FaChevronUp className="cursor-pointer" />
      </div>

      {/* Tags Container */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200
              ${
                selectedTag === tag
                  ? 'bg-green-500 text-white' // Active state style
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Inactive state style
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularTagFilter;