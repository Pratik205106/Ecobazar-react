
import { categoryData } from '../utils/data'

const Category = () => {
  return (
    <div className='w-[1320px] ml-[11.875rem] mx-auto mt-[3.875rem]'>
      <h1 className='text-[2.375rem] font-semibold mb-[2rem]'>Popular Categories</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
      
      {categoryData.map((value, index)=>(
   <div 
   key={index} 
   className='border border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-[#2C742F] transition duration-300 rounded-lg p-3'
 >
          <img height={200} width={213} className={`object-cover rounded-lg my-[1rem] mx-[0.3125rem] ${value.featured && " shadow-green-600"}`} src={value.image} alt={value.title}/>
          <p className='mt-2 text-lg text-center text-[#1A1A1A] mb-[1.5rem] text-[1.5rem] font-medium'>{value.title}</p> 
          </div> 
      ))}
    </div>
    </div>
  ) 
} 

export default Category;   

