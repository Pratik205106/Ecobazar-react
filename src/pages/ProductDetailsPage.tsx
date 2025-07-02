import { useState } from "react";
import Tabs from "../ui/Tabs";
import ProductDescription from "../products/ProductDescription";
import AdditionalInfo from "../products/AdditionalInfo";
import CustomerFeedback from "../products/CustomerFeedback";
import ProductModal from "../ShopComponents/ProductModal";
import { PopularProduct } from "../utils/data"; // adjust if path differs
import { ProductType } from "../../types/types";

const ProductDetailsPage = () => {
  const [showModal, setShowModal] = useState(true); // default to open for testing
  const sampleProduct: ProductType = PopularProduct[0]; // choose a real product

  return (
    <div>
      
      {/* Render modal only if showModal is true */}
      {showModal && (
        <ProductModal
          product={sampleProduct}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="p-4 md:p-10">
        <Tabs
          tabs={["Descriptions", "Additional Information", "Customer Feedback"]}
          contents={[
            <ProductDescription key="desc" />,
            <AdditionalInfo key="info" />,
            <CustomerFeedback key="feedback" />,
          ]}
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
