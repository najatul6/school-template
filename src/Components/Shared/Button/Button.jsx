import PropTypes from "prop-types"

const Button = ({text,icon,className}) => {
  return (
    <button className={`${className} flex justify-center items-center gap-2 px-5 py-3 rounded-md text-xl font-bold`}>
     {text} {icon}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  className: PropTypes.string
}

export default Button