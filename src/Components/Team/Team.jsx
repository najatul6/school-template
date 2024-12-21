import { useState } from "react";
import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import { useEffect } from "react";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/team.json")
      .then((response) => response.json())
      .then((data) => {
        setTeam(data);
        setLoading(false);
  }, []);
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
    </Container>
  );
};

export default Team;
