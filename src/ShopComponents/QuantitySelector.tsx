// components/QuantitySelector.tsx
interface Props {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector = ({ quantity, onIncrease, onDecrease }: Props) => {
  return (
    <div className="flex items-center border border-[#E6E6E6] rounded-3xl w-32 h-[3.125rem]">
        <div className="flex items-center mx-auto">
      <button
        className="h-[2.125rem] w-[2.125rem] text-xl bg-[#F2F2F2] rounded-full"
        onClick={onDecrease}
      >
        -
      </button>
      <span className="w-10 text-center">{quantity}</span>
      <button
        className="h-[2.125rem] w-[2.125rem] text-xl bg-[#F2F2F2] rounded-full"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
    </div>
  );
};

export default QuantitySelector;



