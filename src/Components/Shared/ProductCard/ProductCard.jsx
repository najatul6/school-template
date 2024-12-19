import { FaRegHeart } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5"

const ProductCard = ({course}) => {
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/150" alt="product" />
        <p>Sale</p>
        <div>
          <FaRegHeart/> 
          <IoCartOutline />
        </div>
      </div>
    </div>
  )
}

export default ProductCard