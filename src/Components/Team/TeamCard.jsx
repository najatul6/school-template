import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamCard = ({ member }) => {
  return (
    <div key={member._id} className="bg-white rounded-lg">
      <div className="h-[230px]  rounded-t-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full rounded-t-lg"
        />
      </div>
      <div className="mt-4">
        <h4 className="text-dark-background-color text-center font-bold">
          {member.name}
        </h4>
        <p className="text-xs text-[#737373] text-center">{member.position}</p>
        <div>
          <Link>
            <FaFacebook className="text-blue-500" />
          </Link>
          <Link>
            <FaInstagram className="text-blue-400" />
          </Link>
          <Link>
            <FaTwitter className="text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
