import { useState } from "react";
import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import { useEffect } from "react";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
 useEffect(()=>{
    fetch("/team.json")
    .then((response) => response.json())
    .then((data) => {
      setTeam(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
 },[])
  return (
    <Container>
      <div>
        <SectionHeader
          title={"Watch our Courses"}
          subTitle={"Team"}
          description={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {loading ? (
    Array(4)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 p-6 rounded-lg animate-pulse"
        >
          <div className="w-full h-[200px] bg-gray-300 rounded-lg"></div>
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))
  ) : (
    team?.map((member) => (
      <div key={member._id} className="bg-white p-6 rounded-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <div className="mt-4">
          <h4 className="text-lg font-semibold">{member.name}</h4>
          <p className="text-sm text-gray-500">{member.position}</p>
        </div>
      </div>
    ))
  )}
</div>

    </Container>
  );
}

export default Team;
