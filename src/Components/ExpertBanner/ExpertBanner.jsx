import Container from "../Shared/Container/Container";
import image from "../../assets/features-11-video-thumb.png";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../Shared/Button/Button";
const ExpertBanner = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-6">
        <img src={image} alt="Features Video Thumb" className="rounded-xl" />
        <div>
          <SectionHeader />
          <Button text="Learn More" icon={<MdKeyboardArrowRight />} />
        </div>
      </div>
    </Container>
  );
};

export default ExpertBanner;
