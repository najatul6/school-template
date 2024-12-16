import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

const Courses = () => {
  return (
    <Container>
      <div className="w-1/2">
        <SectionHeader
          title={"Most Popular Courses"}
          subTitle={"Courses"}
          description={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
          }
        />
      </div>
      <div></div>
    </Container>
  );
};

export default Courses;
