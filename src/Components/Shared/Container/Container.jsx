import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto px-4">{children}</div>;
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
