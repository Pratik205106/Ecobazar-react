
import { categoryData } from '../utils/data'

const Category = () => {
  return (
    <div className='ml-[190px]'>
      <h1 className='text-[38px] font-bold '>Popular Categories</h1>
      <div className='grid grid-cols-2'>
      {categoryData.map((value, index)=>(
        <div key={index}> 
          <img height={200} width={213} className='object-cover rounded-lg shadow-md shadow-green-600' src={value.image}/>
          <p className='mt-2 text-lg font-medium'>{value.title}</p> 
          </div> 
      ))}
    </div>
    </div>
  )
} 

export default Category;   
