import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg group">
      <div className="h-[230px] w-full overflow-hidden rounded-t-lg">
        <img
          src={member?.image}
          alt={member?.name}
          className="w-full h-full rounded-t-lg  group-hover:scale-110 duration-500"
        />
      </div>
      <div className="p-[30px] space-y-[10px]">
        <h4 className="text-dark-background-color text-center font-bold">
          {member?.name}
        </h4>
        <p className="text-xs text-[#737373] text-center">{member?.position}</p>
        <div className="flex justify-center gap-4">
          <Link to={member?.facebook} target="_blank">
            <FaFacebook
              size={24}
              className="text-primary-color hover:text-blue-500"
            />
          </Link>
          <Link to={member?.instagram} target="_blank">
            <FaInstagram
              size={24}
              className="text-primary-color hover:text-blue-500"
            />
          </Link>
          <Link to={member?.twitter} target="_blank">
            <FaTwitter
              size={24}
              className="text-primary-color hover:text-blue-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  member: PropTypes.object.isRequired,
};

export default TeamCard;
