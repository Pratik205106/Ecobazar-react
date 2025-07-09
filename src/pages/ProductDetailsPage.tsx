import { useParams } from "react-router-dom";
import Tabs from "../ui/Tabs";
import ProductDescription from "../products/ProductDescription";
import AdditionalInfo from "../products/AdditionalInfo";
import CustomerFeedback from "../products/CustomerFeedback";
import ProductModal from "../ShopComponents/ProductModal";
import { PopularProduct } from "../utils/data";
import { ProductType } from "../../types/types";
import ShopProducts from "../ShopComponents/ShopProducts";
import { useState } from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  if (isNaN(numericId)) {
    return <div className="p-10 text-red-600">Invalid product ID.</div>;
  }

  const sampleProduct: ProductType | undefined = PopularProduct.find(
    (item) => item.id === numericId
  );

  if (!sampleProduct) {
    return <div className="p-10 text-red-600">Product not found.</div>;
  }

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedProducts = PopularProduct.slice(startIdx, endIdx);
  const totalPages = Math.ceil(PopularProduct.length / itemsPerPage);

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

      {/* 🔽 Related Products with Pagination */}
      <div className="space-y-6">
 <ShopProducts products={paginatedProducts} gridColsClass="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />


        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;