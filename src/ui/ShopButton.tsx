// import { IoIosArrowRoundForward } from "react-icons/io"


// interface Props{
//     title:string;
// }
// const ShopButton = ({title}:Props) => {
//   return (
//     <main>
//         <button className="absolute text-green-600 h-[3.1875rem] w-[11.9375rem] bg-white rounded-3xl top-[21.875rem] left-[5rem] font-semibold flex items-center justify-center space-x-2">
//               <span>{title}</span>
//               <IoIosArrowRoundForward size={24} />
//             </button>
//     </main>
//   )
// }

// export default ShopButton;




import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  title: string;
}

const ShopButton = ({ title }: Props) => {
  return (
    <main>
      <button
        className="absolute bg-white text-green-600 rounded-3xl font-semibold flex items-center justify-center space-x-2
                   h-[2.75rem] w-[10rem] sm:h-[3rem] sm:w-[11rem] md:h-[3.1875rem] md:w-[11.9375rem]
                   text-sm sm:text-base
                   top-[16rem] left-[1.5rem]
                   sm:top-[18rem] sm:left-[3rem]
                   md:top-[20rem] md:left-[4rem]
                   lg:top-[21.875rem] lg:left-[5rem]"
      >
        <span>{title}</span>
        <IoIosArrowRoundForward size={24} />
      </button>
    </main>
  );
};

export default ShopButton;
