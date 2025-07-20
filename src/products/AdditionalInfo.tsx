const AdditionalInfo = () => {
  const info = [
    { label: "Weight:", value: "Approx. 500g – 1kg per unit" },
    { label: "Color:", value: "Green" },
    { label: "Type:", value: "Organic" },
    { label: "Category:", value: "Vegetables" },
    { label: "Stock Status:", value: "Available (5,413)" },
    {
      label: "Tags:",
      value: "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage",
    },
  ];

  return (
    <div className="text-[#666666] text-sm space-y-3 leading-relaxed w-full max-w-[648px] px-4 sm:px-6 lg:px-0">
      {info.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4"
        >
          <div className="sm:w-[140px] font-semibold text-[#1A1A1A] text-[14px]">
            {label}
          </div>
          <div className="flex-1">{value}</div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalInfo;
