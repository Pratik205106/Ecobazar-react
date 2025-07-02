const CustomerFeedback = () => {
  return (
    <div className="space-y-6 text-sm text-[#808080]">
      {/* Review 1 */}
      <div className="border p-4 rounded-md shadow-sm">
        <p>“Very fresh and organic! The packaging was excellent and delivery was quick.”</p>
        <p className="text-xs text-[#1A1A1A] mt-2">- Anisha Thapa</p>
      </div>

      {/* Review 2 */}
      <div className="border p-4 rounded-md shadow-sm">
        <p>“I love that it's locally sourced and chemical-free. Will purchase again!”</p>
        <p className="text-xs text-[#1A1A1A] mt-2">- Binod Karki</p>
      </div>

      {/* Review 3 */}
      <div className="border p-4 rounded-md shadow-sm">
        <p>“Great quality. A bit pricier than others, but totally worth it for the health benefits.”</p>
        <p className="text-xs text-[#1A1A1A] mt-2">- Rekha Sharma</p>
      </div>
    </div>
  );
};

export default CustomerFeedback;
