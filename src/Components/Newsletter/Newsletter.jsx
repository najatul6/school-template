import Container from "../Shared/Container/Container";

const Newsletter = () => {
  return (
    <Container>
      <div className="text-white text-center flex gap-6 flex-col justify-center items-center">
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
      <div className="flex justify-center items-center mt-10">
        <div className="join">
          <input
            className="input input-bordered join-item text-white placeholder:text-white focus:outline-none"
            placeholder="Email"
          />
          <button className="btn bg-primary-color text-white hover:bg-dark-background-color join-item rounded-r-full">Subscribe</button>
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
