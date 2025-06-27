import { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const PriceFilter = () => {
  const [price, setPrice] = useState<[number, number]>([50, 1500]);

  return (
    <>
      <style>{`
        .price-slider {
          height: 4px;
        }
        .price-slider .range-slider__range {
          background-color: #00B207;
          height: 4px;
          border-radius: 9999px;
        }
        .price-slider .range-slider__thumb {
          width: 20px;
          height: 20px;
          background-color: white;
          border: 3px solid #00B207;
          box-shadow: none;
        }
        .price-slider .range-slider__thumb[data-active] {
          cursor: grabbing;
        }
      `}</style>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-normal">Price</h2>
          <FaChevronUp size={20} />
        </div>

        <div className="mt-6 mb-4">
          <RangeSlider
            className="price-slider"
            min={0}
            max={2000}
            step={10}
            value={price}
            onInput={(value: number[]) => setPrice([value[0], value[1]])}
          />
        </div>

        <p className="text-sm text-gray-500 m-0">
          Price: <span className="font-medium text-black">{price[0]} – {price[1]}</span>
        </p>
        <hr className="font-sans p-4  border-gray-200 mt-8"/>
    </>
  );
};

export default PriceFilter;
