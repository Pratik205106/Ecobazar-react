import { FaCheckCircle } from "react-icons/fa";

const ProductDescription = () => {
  return (
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <p>
        Our premium quality organic vegetables are grown without the use of synthetic
        pesticides or fertilizers, ensuring maximum nutrition and safety for your family.
      </p>

      <ul className="space-y-2">
        {[
          "Freshly harvested and packed for each order",
          "Free from harmful chemicals and additives",
          "Sourced directly from local organic farms",
          "Tested for purity and quality assurance",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-green-600">
            <FaCheckCircle className="mt-1" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p>
        Experience the taste of nature with every bite. Our vegetables are not only healthy
        but also rich in flavor and texture. Ideal for salads, curries, and daily meals.
      </p>
    </div>
  );
};

export default ProductDescription;
