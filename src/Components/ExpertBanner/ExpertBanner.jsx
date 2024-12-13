import Container from "../Shared/Container/Container";
import image from "../../assets/features-11-video-thumb.png";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../Shared/Button/Button";
const ExpertBanner = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-6">
        <img src={image} alt="Features Video Thumb" />
        <div>
          <SectionHeader />
          <Button text="Learn More" icon={<MdKeyboardArrowRight />} />
        </div>
      </div>
    </Container>
  );
};

export default ExpertBanner;
