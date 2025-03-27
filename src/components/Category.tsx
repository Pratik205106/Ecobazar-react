
import { categoryData } from '../utils/data'

const Category = () => {
  return (
    <div className='ml-[11.875rem] mx-auto mt-[3.875rem]'>
      <h1 className='text-[2.375rem] font-bold mb-[2rem]'>Popular Categories</h1>
      <div className='flex flex-wrap gap-5 '>
      {categoryData.map((value, index)=>(
        <div key={index} className='border'> 
          <img height={200} width={213} className={`object-cover rounded-lg my-[1rem] mx-[0.3125rem] ${value.featured && " shadow-green-600"}`} src={value.image}/>
          <p className='mt-2 text-lg text-center mb-[1.5rem] text-[1.5rem] font-medium'>{value.title}</p> 
          </div> 
      ))}
    </div>
    </div>
  )
} 

export default Category;   
