import PropTypes from "prop-types";
import { FaEye, FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Button from "../Button/Button";
import { FiDownload } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProductCard = ({ course }) => {
  const {
    title,
    name,
    description,
    totalSell,
    price,
    discountPrice,
    rating,
    image,
  } = course;
  return (
    <div>
      <div className="relative overflow-hidden border">
        <img src={image} alt={name} className="w-full" />
        <p className="absolute top-5 left-5 p-1 bg-danger-color font-bold rounded-md text-light-color">
          Sale
        </p>
        <div className="absolute bottom-5 left-[25%] flex gap-2">
          <div className="p-[10px] bg-light-color rounded-full text-dark-background-color cursor-pointer hover:text-primary-color hover:bg-dark-background-color duration-300">
            <FaRegHeart className="text-xl" />
          </div>
          <div className="p-[10px] bg-light-color rounded-full text-dark-background-color cursor-pointer hover:text-primary-color hover:bg-dark-background-color duration-300">
            <IoCartOutline className="text-xl" />
          </div>
          <div className="p-[10px] bg-light-color rounded-full text-dark-background-color cursor-pointer hover:text-primary-color hover:bg-dark-background-color duration-300">
            <FaEye className="text-xl" />
          </div>
        </div>
      </div>
      <div className="bg-light-color p-[25px] space-y-[10px] text-dark-background-color">
        {/* Title and Starts */}
        <div className="flex justify-between">
          <h4 className="font-bold text-sm text-primary-color">{title}</h4>
          <div className="flex gap-2 bg-dark-background-color py-[5px] px-[10px] rounded-full">
            <p className="text-yellow-500">
              <FaStar />
            </p>
            <p className="text-xs text-light-color">{rating}</p>
          </div>
        </div>
        {/* Description */}
        <h2 className="font-bold text-dark-background-color">{name}</h2>
        <p className="opacity-[0.5]">
          {description.length > 50
            ? `${description.slice(0, 50)} ....`
            : description}
        </p>
        <p className="flex gap-2 items-center font-bold">
          <FiDownload /> {totalSell} Sales
        </p>
        <div className="flex items-center gap-2 font-bold">
          <del className="opacity-[0.6]">$ {price}</del>
          <p className="text-danger-color">$ {discountPrice}</p>
        </div>
        <Button text="Learn More" icon={<MdKeyboardArrowRight />} withOutBg />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  course: PropTypes.object,
};

export default ProductCard;
