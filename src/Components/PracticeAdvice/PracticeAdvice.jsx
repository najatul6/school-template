import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

import icon1 from "../../assets/icons/icon cool-icon-l1.svg";
import icon2 from "../../assets/icons/icon cool-icon-l10.svg";
import icon3 from "../../assets/icons/icon cool-icon-l13.svg";
import icon4 from "../../assets/icons/icon cool-icon-l7.svg";

const PracticeAdvice = () => {
  return (
    <Container>
      <div className="w-1/2">
        <SectionHeader
          subTitle={"Practice Advice"}
          title={"Every Client Matters"}
          description={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
          }
        />
      </div>
      <div>
        <div className="">
          <img src={icon1} alt="" />
          <h4>training Courses</h4>
          <hr />
          <p>The gradual accumulation of information about</p>
        </div>
        <div className="">
          <img src={icon4} alt="" />
          <h4>2,769 online courses</h4>
          <hr />
          <p>The gradual accumulation of information about</p>
        </div>
        <div className="">
          <img src={icon2} alt="" />
          <h4>Books Library</h4>
          <hr />
          <p>The gradual accumulation of information about</p>
        </div>
        <div className="">
          <img src={icon3} alt="" />
          <h4>2,769 online courses</h4>
          <hr />
          <p>The gradual accumulation of information about</p>
        </div>
      </div>
    </Container>
  );
};

export default PracticeAdvice;
