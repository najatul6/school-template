import { FaEye, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ course }) => {
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/150" alt="product" />
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
    </div>
  );
};

export default ProductCard;