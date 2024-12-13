import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

import icon1 from "../../assets/icons/icon cool-icon-l1.svg";
import icon2 from "../../assets/icons/icon cool-icon-l10.svg";
import icon3 from "../../assets/icons/icon cool-icon-l13.svg";
import icon4 from "../../assets/icons/icon cool-icon-l7.svg";

const PracticeAdvice = () => {
  return (
    <Container>
      <div className="">
        <div className="w-1/2">
          <SectionHeader
            subTitle={"Practice Advice"}
            title={"Every Client Matters"}
            description={
              "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
            }
          />
        </div>
        <div className="grid grid-cols-4 gap-[30px] place-items-center">
          <div className="">
            <div className="flex flex-col justify-start items-start px-10 py-12 gap-5 bg-light-color">
              <img src={icon1} alt="" />
              <h4 className="text-dark-background-color font-bold capitalize">
                training Courses
              </h4>
              <div className="flex justify-start items-start w-full">
                <hr className="w-1/3 border-2 border-danger-color" />
              </div>
              <p className="text-sm font-medium tracking-[0.2px] text-dark-background-color opacity-[0.6]">
                The gradual accumulation of information about
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start px-10 py-12 gap-5 bg-light-color">
            <img src={icon4} alt="" />
            <h4 className="text-dark-background-color font-bold capitalize">
              2,769 online courses
            </h4>
            <div className="flex justify-start items-start w-full">
              <hr className="w-1/3 border-2 border-danger-color" />
            </div>
            <p className="text-sm font-medium tracking-[0.2px] text-dark-background-color opacity-[0.6]">
              The gradual accumulation of information about
            </p>
          </div>
          <div className="flex flex-col justify-start items-start px-10 py-12 gap-5 bg-light-color">
            <img src={icon2} alt="" />
            <h4 className="text-dark-background-color font-bold capitalize">
              Books Library
            </h4>
            <div className="flex justify-start items-start w-full">
              <hr className="w-1/3 border-2 border-danger-color" />
            </div>
            <p className="text-sm font-medium tracking-[0.2px] text-dark-background-color opacity-[0.6]">
              The gradual accumulation of information about
            </p>
          </div>
          <div className="flex flex-col justify-start items-start px-10 py-12 gap-5 bg-light-color">
            <img src={icon3} alt="" />
            <h4 className="text-dark-background-color font-bold capitalize">
              2,769 online courses
            </h4>
            <div className="flex justify-start items-start w-full">
              <hr className="w-1/3 border-2 border-danger-color" />
            </div>
            <p className="text-sm font-medium tracking-[0.2px] text-dark-background-color opacity-[0.6]">
              The gradual accumulation of information about
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PracticeAdvice;
