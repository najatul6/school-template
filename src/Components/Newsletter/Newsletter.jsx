import Container from "../Shared/Container/Container";

const Newsletter = () => {
  return (
    <Container>
      <div className="text-white flex gap-6 flex-col justify-center items-start">
        <h6 className="text-primary-color text-sm font-bold tracking-[0.2px]">
          Newsletter
        </h6>
        <h1 className="text-[40px] font-bold capitalize">
          Our Popular Courses
        </h1>
        <p className="text-sm tracking-[0.2px] capitalize">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
    </Container>
  );
};

export default Newsletter;
