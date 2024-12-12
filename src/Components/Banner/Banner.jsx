import Button from "../Shared/Button/Button";
import banner from "../../assets/none.png";

const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-[30px]">
      <div className="flex flex-col justify-start items-start ">
        <h6>Welcome</h6>
        <h1>Best Learning Opportunities</h1>
        <p>Every day brings with it a fresh set of learning possibilities.</p>
        <div className="flex justify-start items-center gap-[10px]">
          <Button text={"Get Quote Now"} withBg />
          <Button text={"Learn More"} withOutBg />
        </div>
      </div>
      <img src={banner} alt="Student Banner image" />
    </div>
  );
};

export default Banner;
