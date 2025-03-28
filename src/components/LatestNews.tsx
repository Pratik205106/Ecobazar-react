import { LATEST_IMAGE } from "../utils/staticImg";


const LatestNews = () => {
  return (
    <div>
     <section className="h-[82.5rem] w-[35.25rem] mx-auto">   
      <h1 className="text-[2rem] font-semibold">Latest News</h1>
      {LatestNews.map((news, index)=>(
        <div key={index}>
          <img src={LATEST_IMAGE[news.image as keyof typeof LATEST_IMAGE]} alt={news.title} />
          <h2>{news.titl e}</h2>
        </div>
      ))}
     </section>
    </div>
  )
}

export default LatestNews;