

const CartProduct = () => {
  return (
  
    <section>
      <h1 className="font-semibold text-2xl flex text-center mx-auto">My Shopping Cart</h1>
        <div className="w-[54.5rem] h-[23.1875rem] bg-[#E5E5E5]">
<div className="h-[1.875rem]">
<ul className="flex">
    <li className="text-[#808080] font-medium">PRODUCT</li>
    <li className="text-[#808080] font-medium">PRICE</li>
    <li className="text-[#808080] font-medium">QUANTITY</li>
    <li className="text-[#808080] font-medium">SUBTOTAL</li>
</ul>
</div>
<div className="h-[6.25rem]">
<img src="" alt="" />
<h2 className="text-base text-[#1A1A1A]">Green Capsicum</h2>

</div>
        </div>
    </section>
  )
}

export default CartProduct;