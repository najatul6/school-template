import Container from "../Shared/Container/Container";
import image from "../../assets/features-11-video-thumb.png";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../Shared/Button/Button";
const ExpertBanner = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-10 place-items-center">
        <img src={image} alt="Features Video Thumb" className="rounded-xl" />
        <div className="flex flex-col justify-start items-start">
          <SectionHeader
            subTitle={"Features"}
            title={"Our Experts Teacher"}
            description={
              "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
            }
          />
          <Button text="Learn More" icon={<MdKeyboardArrowRight />} />
        </div>
      </div>
    </Container>
  );
};

export default ExpertBanner;
