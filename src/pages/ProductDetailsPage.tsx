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
    <div className="w-full md:p-10 max-w-4xl mx-auto">
      <Tabs
        tabs={["Descriptions", "Additional Information", "Customer Feedback"]}
        contents={[
          <ProductDescription key="desc" />,
          <AdditionalInfo key="info" />,
          <CustomerFeedback key="feedback" />,
        ]}
      />
    </div>
  );
};

export default ProductDetailsPage;
