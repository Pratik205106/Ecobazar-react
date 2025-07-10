import { InstaPost } from "../utils/data";

const InstaSec = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[82.5rem] mx-auto">
        <h1 className="font-semibold text-[2rem] text-gray-900 text-center">
          Follow us on Instagram
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-[32px]">
          {InstaPost.map((post, index) => (
            <div key={index}>
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="h-[12.5rem] w-[12.5rem] object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaSec;
