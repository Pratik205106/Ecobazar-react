import { useState } from "react";

interface TabProps {
  tabs: string[];
  contents: React.ReactNode[];
}

const Tabs = ({ tabs, contents }: TabProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-4 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`pb-2 text-sm md:text-base font-medium transition-colors duration-200 relative
              ${
                activeIndex === index
                  ? "text-green-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-green-600"
                  : "text-gray-500 hover:text-green-600"
              }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {contents[activeIndex]}
      </div>
    </div>
  );
};

export default Tabs;
