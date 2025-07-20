import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarsProps {
  rating: number;
  className?: string;
  color?: string;
}

const Stars = ({ rating, className = "", color = "#FF8A00" }: StarsProps) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const iconStyle = { color }; // ✅ Apply dynamic color via inline style

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} style={iconStyle} />
      ))}
      {halfStar === 1 && <FaStarHalfAlt style={iconStyle} />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} style={iconStyle} />
      ))}
    </div>
  );
};

export default Stars;
