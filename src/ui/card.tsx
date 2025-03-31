

interface Props{
    image:string,
    title:string,
   
    number:string | number,
}

const Card = ({image,title,number}:Props) => {
  return (
    <div  className="border">
    <img src={image} height={327} width={264} className="object-cover rounded-lg" alt="" />
    <div className='mt-2 text-lg ml-[0.75rem]'>
    <p className="text-gray-700">{title}</p> 
    <div>
    <p>{number}</p>
  </div>  
  </div>  
  </div>
    )
}

export default Card;