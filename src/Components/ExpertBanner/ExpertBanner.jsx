import Container from "../Shared/Container/Container";
import image from "../../assets/features-11-video-thumb.png";
const ExpertBanner = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-6">
        <img src={image} alt="Features Video Thumb" />
        <div></div>
      </div>
    </Container>
  );
};

export default ExpertBanner;
