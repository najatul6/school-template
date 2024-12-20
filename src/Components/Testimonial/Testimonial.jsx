import Marquee from "react-fast-marquee";
import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

const Testimonial = () => {
  return (
    <Container>
      <SectionHeader
        subTitle={"Testimonials"}
        title={"Get Quality Education"}
        description={
          "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
        }
      />
      <div>
        <Marquee></Marquee>
      </div>
    </Container>
  );
};

export default Testimonial;
