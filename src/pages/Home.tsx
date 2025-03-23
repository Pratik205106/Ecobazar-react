import homeImg from "../assets/image/bgImage.jpg";
import vegBag from "../assets/image/vegBag.png";
import bgLeaf from "../assets/image/bgLeaf.png";

const Home = () => {
  return (
    <section>
      <div className="h-[600px] w-[1319px] mx-auto my-[24px]">
        <div className="grid grid-cols-2 ">
<div className=" w-[872px]">
  
  <img src={homeImg} alt="" className="rounded-lg h-full"/>
</div>
<div className="grid grid-rows-2 gap-6 ml-[236px]">
<div className="h-[288px] w-[423px]">
  <img src={vegBag} alt="" />
</div>
<div className="h-[288px] w-[423px]">
  <img src={bgLeaf} alt="" /> 
</div>
</div>
</div>
      </div>
    </section> 
  )
}

export default Home;  