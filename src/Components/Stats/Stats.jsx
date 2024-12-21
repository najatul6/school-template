import Container from "../Shared/Container/Container";

const Stats = () => {
  return (
    <Container>
      <div className="w-full grid  grid-cols-2 md:grid-cols-4 gap-[30px]">
        <div className="stat place-items-center">
          <div className="stat-value text-primary-color">15K</div>
          <div className="stat-desc text-light-color font-bold">
            Happy Customers
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-primary-color">150K</div>
          <div className="stat-desc text-light-color font-bold">
            Monthly Visitors
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-primary-color">15</div>
          <div className="stat-desc text-light-color font-bold">
            Countries Worldwide
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-primary-color">100+</div>
          <div className="stat-desc text-light-color font-bold">
            Top Partners
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stats;
