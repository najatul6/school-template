import { FaEye, FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ course }) => {
  return (
    <div>
      <div>
        <img src={course?.image} alt={course?.name} />
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
        <h4>{course?.title}</h4>
        <div>
          <p><FaStar /></p>
          <p>{course?.rating}</p>
        </div>
        </div>
        <p>{course?.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
