// src/components/RatingFilter.tsx

import { useState } from 'react';
import { FaChevronUp, FaStar, FaRegStar, FaCheck } from 'react-icons/fa';

const renderFilterStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={`filled-${i}`} className="text-[#FF8A00]" />);
    } else {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }
  }
  return <div className="flex items-center gap-x-1">{stars}</div>;
};


const RatingFilter = () => {
  const [selectedRating, setSelectedRating] = useState<number>(4);
  const ratingOptions = [5, 4, 3, 2, 1];

  const handleRatingChange = (rating: number) => {
    setSelectedRating(current => (current === rating ? 0 : rating));
  };

  return (
    // CHANGE 1: Removed `border` and `rounded-md` from the main container.
    <div className="p-4 bg-white w-full max-w-sm font-sans">
      {/* Header Section */}
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">Rating</h3>
        <FaChevronUp className="cursor-pointer" />
      </div>

      {/* List of Rating Options */}
      <ul className="space-y-3">
        {ratingOptions.map((rating) => (
          <li key={rating}>
            <label className="flex items-center gap-x-3 cursor-pointer">
              {/* Custom Styled Checkbox (the "button" with a border) */}
              <input
                type="checkbox"
                className="hidden"
                checked={selectedRating === rating}
                onChange={() => handleRatingChange(rating)}
              />
              <span
                className={`w-5 h-5 border-2 rounded flex items-center justify-center
                  ${
                    selectedRating === rating
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300'
                  }`}
              >
                {selectedRating === rating && <FaCheck className="text-white text-xs" />}
              </span>

              {/* Stars Display */}
              {renderFilterStars(rating)}

              {/* CHANGE 2: Made the rating number text darker and bolder */}
              <span className="text-sm font-medium text-gray-800">
                {rating.toFixed(1)} {rating < 5 ? '& up' : ''}
              </span>
            </label>
          </li>
        ))}
      </ul>
      
      {/* CHANGE 3: Added the horizontal rule at the bottom */}
      <hr className="mt-4 border-gray-200" />
    </div>
  );
};

export default RatingFilter;