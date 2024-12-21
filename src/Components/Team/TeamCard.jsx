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
        <h4 className="text-dark-background-color text-center font-bold">{member.name}</h4>
        <p className="text-sm text-gray-500">{member.position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
