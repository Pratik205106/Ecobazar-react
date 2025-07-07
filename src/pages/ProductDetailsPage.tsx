import { useParams } from "react-router-dom";
import Tabs from "../ui/Tabs";
import ProductDescription from "../products/ProductDescription";
import AdditionalInfo from "../products/AdditionalInfo";
import CustomerFeedback from "../products/CustomerFeedback";
import { PopularProduct } from "../utils/data";
import { ProductType } from "../../types/types";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return <div className="p-10 text-red-600">Invalid product ID.</div>;
  }

  const sampleProduct: ProductType | undefined = PopularProduct.find(
    (item) => item.id === numericId
  );

  if (!sampleProduct) {
    return <div className="p-10 text-red-600">Product not found.</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1fr_480px] gap-14 items-start">
      {/* Left Column: Tabs */}
      <div>
        <Tabs
          tabs={["Descriptions", "Additional Information", "Customer Feedback"]}
          contents={[
            <ProductDescription key="desc" />,
            <AdditionalInfo key="info" />,
            <CustomerFeedback key="feedback" />,
          ]}
        />
      </div>

      {/* Right Column: Video + Info Cards */}
      <div className="flex flex-col gap-6 mt-[60px]">
        {/* Video Section */}
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          />
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-2 gap-4 border shadow-sm rounded-">
          <div className=" p-4 text-center">
            <h3 className="text-green-600 font-semibold">64% Discount</h3>
            <p className="text-sm text-gray-600">Save your 64% money with us</p>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-green-600 font-semibold">100% Organic</h3>
            <p className="text-sm text-gray-600">100% Organic Vegetables</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
