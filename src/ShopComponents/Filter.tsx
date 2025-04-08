

const Filter = () => {
  return (
    <section className="mt-10">
    {/* Filter Controls */}
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6 mb-6 px-4">
      <div className="flex flex-wrap gap-4">
        <select className="border border-gray-400 rounded h-10 px-3 w-44">
          <option value="">Select Category</option>
        </select>
        <select className="border border-gray-400 rounded h-10 px-3 w-44">
          <option value="">Select Price</option>
        </select>
        <select className="border border-gray-400 rounded h-10 px-3 w-44">
          <option value="">Select Rating</option>
        </select>
      </div>
  
      <div className="flex gap-4">
        <select className="border border-gray-400 rounded h-10 px-3 w-44">
          <option value="">Sort by: Latest</option>
        </select>
        <select className="border border-gray-400 rounded h-10 px-3 w-44">
          <option value="">Show: 16</option>
        </select>
      </div>
    </div>
  
    {/* Active Filters */}
    <div className="w-full flex items-center justify-between px-4 py-3 border-y border-[#E5E5E5]">
      {/* Left side: filters */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-[0.875rem] font-medium text-[#808080]">Active Filters:</span>
        <span className="text-sm text-black flex items-center gap-1">
          Wing Chair
          <button className="hover:text-red-500 text-xl leading-none">×</button>
        </span>
        <span className="text-sm text-black flex items-center gap-1">
          Min $300 - Max $500
          <button className="hover:text-red-500 text-xl leading-none">×</button>
        </span>
      </div>
  
      {/* Right side: results */}
      <div className="text-sm font-semibold text-gray-700 whitespace-nowrap flex items-center gap-1">
  <strong>2,547</strong>
  <span className="text-[#808080]">Results found.</span>
</div>

    </div>
  </section>
  
  )
}

export default Filter