import { useParams } from "react-router-dom";
import Tabs from "../ui/Tabs";
import ProductDescription from "../products/ProductDescription";
import AdditionalInfo from "../products/AdditionalInfo";
import CustomerFeedback from "../products/CustomerFeedback";
import ProductModal from "../ShopComponents/ProductModal";
import { PopularProduct } from "../utils/data";
import { ProductType } from "../../types/types";
import ShopProducts from "../ShopComponents/ShopProducts";

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
    <div className="w-full max-w-7xl mx-auto px-6 py-12 space-y-14">
      {/* 🔼 Product Section as Layout */}
      <ProductModal product={sampleProduct} isEmbedded />

      {/* 🔽 Tabs + Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_480px] gap-14 items-start">
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

        <div className="flex flex-col gap-6 mt-[60px]">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allowFullScreen
            />
          </div>

          <div className="grid grid-cols-2 gap-4 border shadow-sm rounded-lg">
            <div className="p-4 text-center">
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
      <div>
        <ShopProducts/>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
