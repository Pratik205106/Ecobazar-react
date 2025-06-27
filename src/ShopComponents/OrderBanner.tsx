import vegtables from "../assets/image/mixVegtables.jpg";
import Buttons from "../ui/Buttons";

const OrderBanner = () => {
  return (
    <section className="w-full">
      <div className="max-w-[82.5rem] mx-auto relative">
        {/* Image with adjusted visible area */}
        <img
          src={vegtables}
          alt="A mix of fresh vegetables"
          className="w-full h-[300px] object-cover object-bottom rounded-lg"
        />

        {/* Overlay content */}
        <div className="absolute top-4 left-12 z-10 text-[#F2F2F2] space-y-2">
          <h1 className="font-semibold text-[32px] text-[#FF8A00] leading-tight">
            79% <span className="text-black">Discount</span>
          </h1>
          <h2 className="text-[#4D4D4D] ml-8">on your first order</h2>
          <Buttons className="text-[#00B207] text-4 font-semibold" />
        </div>
      </div>
    </section>
  );
};

export default OrderBanner;
