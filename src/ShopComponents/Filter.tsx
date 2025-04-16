import { useState } from "react";

type Category = {
  name: string;
  count: number;
  secondaryCount?: number;
};

const categories: Category[] = [
  { name: "Fresh Fruit", count: 25, secondaryCount: 134 },
  { name: "Vegetables", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snacks", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Beauty & Health", count: 38 },
  { name: "Bread & Bakery", count: 15 },
];

const CategoryFilter = () => {
  const [selected, setSelected] = useState("Vegetables");

  return (
    <div className="space-y-4 mx-auto mt-8">
      <h2 className="text-lg font-semibold">All Categories</h2>
      {categories.map((category) => (
        <label key={category.name} className="flex items-center cursor-pointer space-x-2">
          <input
            type="radio"
            name="category"
            value={category.name}
            checked={selected === category.name}
            onChange={() => setSelected(category.name)}
            className="form-radio text-[#1A1A1A] focus:ring-green-700"
          /> 
          <span className="text-sm text-gray-800">
            {category.name} <span className="text-gray-500">({category.count})</span>
            {category.secondaryCount && (
              <span className="text-gray-400 ml-1">({category.secondaryCount})</span>
            )}
          </span>
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;
