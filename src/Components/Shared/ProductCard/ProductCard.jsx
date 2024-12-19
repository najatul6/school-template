import { FaEye, FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ course }) => {
  const { title, name, description, totalSell, price, discountPrice, rating, image} = course;
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
            <p>
              <FaStar />
            </p>
            <p>{course?.rating}</p>
          </div>
        </div>
        <div>
          <p>{course?.price}</p>
          <p>{course?.discountPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
