import { FaCheckCircle } from "react-icons/fa";

const ProductDescription = () => {
  return (
    <div className="space-y-4 text-[#808080] text-sm leading-relaxed h-[435px] w-[648px]">
      <p>
        Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
        posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
        vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
        porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
        Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et
        condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque
        vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis,
        egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
        Phasellus nec fringilla elit.
        <br />
        Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
        iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
        pellentesque tristique neque mi eget nulla. Proin luctus elementum neque
        et pharetra.
      </p>

      <ul className="space-y-2">
        {[
          "100 g of fresh leaves provides.",
          "Aliquam ac est at augue volutpat elementum.",
          "Quisque nec enim eget sapien molestie.",
          "Proin convallis odio volutpat finibus posuere.",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-green-600">
            <FaCheckCircle className="mt-1" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      <p>
        Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
        blandit eros non turpis lobortis iaculis at ut massa.
      </p>
    </div>
  );
};

export default ProductDescription;
