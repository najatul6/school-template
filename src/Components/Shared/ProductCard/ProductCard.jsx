import PropTypes from "prop-types";
import { FaEye, FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

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
      <div className="relative overflow-hidden">
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
      <div>
        <div>
          <h4 className="font-bold text-primary-color">{title}</h4>
          <div>
            <p>
              <FaStar />
            </p>
            <p>{rating}</p>
          </div>
        </div>
        <div>
          <p>{price}</p>
          <p>{discountPrice}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  course: PropTypes.object,
};

export default ProductCard;
