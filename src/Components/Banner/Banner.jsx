import Button from "../Shared/Button/Button";
import banner from "../../assets/none.png";
import Container from "../Shared/Container/Container";

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px] text-light-color py-5">
        <div className="flex flex-col justify-start items-start gap-[30px] lg:w-1/3">
          <h6 className="font-bold tracking-[0.1px] text-primary-color">Welcome</h6>
          <h1 className="font-bold text-4xl">Best Learning Opportunities</h1>
          <p className="text-xl tracking-[0.2px]">Every day brings with it a fresh set of learning possibilities.</p>
          <div className="flex justify-start items-center gap-[10px]">
            <Button text={"Get Quote Now"} withBg />
            <Button text={"Learn More"} withOutBg />
          </div>
        </div>
        <img src={banner} alt="Student Banner image" />
      </div>
    </Container>
  );
};

export default Banner;
