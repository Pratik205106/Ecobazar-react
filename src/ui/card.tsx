import { BsHandbag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RiEyeLine } from "react-icons/ri";


interface Props{
    image:string;
    title:string;
    star?: number;
    rate:string;
    fixRate?:string;
  
} 

const Card = ({image,title,rate,star}:Props) => {
  const newStar = star as number || 0
const renderStars = (rating: number)=> {
  const fullStars = Math.floor(Number(rating));
  const halfStars = Number(rating) % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
   console.log([...Array(fullStars)]  )
  return(
    <>
    {/*Full stars*/}
 {[...Array(fullStars)].map((_, index)=>(
  <FaStar key={`full-${index}`} className="text-[#FF8A00]"/>
 ))}

 {/*half stars*/}
    {[...Array(halfStars)].map((_, index)=>(
      <FaStarHalfAlt key={`half-${index}`} className="text-[#FF8A00]"/>
    ))}

{/*empty stars*/}
{[...Array(emptyStars)].map((_, index)=>(
<FaRegStar key={`empty-${index}`} className="text-[#FF8A00]"/>
))}

    </>
  );
};

  return (
    <div className="border group p-4 shadow-md relative transition-all hover:shadow-[#00B207]"> 
      {/*Image*/}
    <img src={image} height={327} width={264} className="object-cover rounded-lg" alt="" />

{/*floating Buttons*/}
    <div className=" hidden group-hover:flex absolute top-2 right-2 flex-col gap-2">

    <button 
    className="h-10 w-10 bg-[#F2F2F2] rounded-full flex justify-center items-center"
    onClick={()=>console.log("How are you")}>
<CiHeart/>

    </button>

</div>

{/*Quick view Button*/}
    <div className="hidden group-hover:block  items-center ml-[200px] absolute top-16 right-2 flex-col">
    
    <button 
    className="h-10 w-10 bg-[#F2F2F2] rounded-full flex justify-center items-center"
    onClick={()=>console.log("How are you")}>
<RiEyeLine/>

    </button>

</div>

  {/* Product Info */} 
    <div className='mt-2 text-lg ml-[0.75rem]'>
    <p className="text-[#4D4D4D] hover:text-[#2C742F] font-medium">{title}</p> 
    <div>
    <p className="text-[1rem] text-[#1A1A1A]">{rate}</p>
  </div> 

  {/* Add to Cart Button */}
    <div className="flex items-center ml-[200px] absolute top-60 right-2 flex-col">
    
      <button 
      className="h-10 w-10 bg-[#F2F2F2] rounded-full flex justify-center items-center text-[#1A1A1A] hover:text-white hover:bg-[#00B207]"
      onClick={()=>console.log("hello world")} >
        <BsHandbag/> 
      </button>
    
    </div>

    {/* Star Ratings */}
  <div className="flex items-center">
      {renderStars(newStar)}
      </div> 
  </div>  
  
  </div>
    )
}

export default Card;