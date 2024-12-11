import PropTypes from "prop-types";

const Button = ({ text, icon, withBg, withOutBg, whiteText }) => {
  return (
    <button
      className={`${
        withBg
          ? "bg-primary-color text-light-color hover:bg-transparent border border-primary-color"
          : withOutBg
          ? "bg-transparent border border-primary-color text-primary-color hover:bg-primary-color hover:text-light-color"
          : whiteText
          ? "text-light-color hover:text-primary-color"
          : "text-primary-color hover:text-light-color"
      }  flex justify-center items-center gap-2 px-5 capitalize py-3 rounded-md text-xl font-bold`}
    >
      {text} {icon}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  withBg: PropTypes.bool,
  withOutBg: PropTypes.bool,
  whiteText: PropTypes.bool,
};

export default Button;

// with bg
// bg-primary-color text-light-color hover:bg-transparent border border-primary-color

// without bg
// bg-transparent border border-primary-color text-primary-color hover:bg-primary-color hover:text-light-color

// white text
// text-light-color hover:text-primary-color
