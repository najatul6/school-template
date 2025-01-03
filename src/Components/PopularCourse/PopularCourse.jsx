import Container from "../Shared/Container/Container";
import image from "../../assets/thumb-concept.png";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import Button from "../Shared/Button/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
const PopularCourse = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-10">
        <div className="w-1/2">
          <img src={image} alt="Child with smile face" className="w-full" />
        </div>
        <div className="w-1/3">
          <SectionHeader
            title={"Our Popular Courses"}
            subTitle={"Popular Courses"}
            description={
              "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
            }
          />
          <Button text="Learn More" icon={<MdKeyboardArrowRight />} whiteText />
        </div>
      </div>
    </Container>
  );
};

export default PopularCourse;
