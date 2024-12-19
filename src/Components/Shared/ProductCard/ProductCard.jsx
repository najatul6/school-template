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
      <div>
        <img src={image} alt={name} />
        <p>Sale</p>
        <div>
          <div>
            <FaRegHeart />
          </div>
          <div>
            <IoCartOutline />
          </div>
          <div>
            <FaEye />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4>{title}</h4>
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

export default ProductCard;
