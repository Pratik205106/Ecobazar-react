// components/SocialIcons.tsx
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
       <div className="flex gap-3">
    {/* Facebook */}
    <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-green-600 hover:opacity-90 cursor-pointer transition">
      <FaFacebookF className="text-white text-[16px]" />
    </div>

    {/* Twitter */}
    <div className="h-[40px] w-[40px] flex items-center justify-center hover:opacity-90 cursor-pointer">
      <FaTwitter className="text-[#4D4D4D] text-[16px]" />
    </div>

    {/* Pinterest */}
    <div className="h-[40px] w-[40px] flex items-center justify-center hover:opacity-90 cursor-pointer">
      <FaPinterestP className="text-[#4D4D4D] text-[16px]" />
    </div>

    {/* Instagram */}
    <div className="h-[40px] w-[40px] flex items-center justify-center hover:opacity-90 cursor-pointer">
      <FaInstagram className="text-[#4D4D4D] text-[16px]" />
    </div>
  </div>

 
  );
};

export default SocialIcons;
