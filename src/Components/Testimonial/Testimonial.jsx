import Marquee from "react-fast-marquee";
import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/reviews.json")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);
  return (
    <Container>
      <SectionHeader
        subTitle={"Testimonials"}
        title={"Get Quality Education"}
        description={
          "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
        }
      />
      <Marquee speed={120}>
        <div className="flex gap-6 w-full justify-center items-center  mt-10">
          {loading ? (
            <p>Loading...</p>
          ) : (
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-5 bg-light-color px-[20px] py-[25px]"
              >
                <img
                  src={testimonial.profilePic}
                  alt={testimonial.name}
                  className="w-[68px] h-[68px] rounded-full"
                />
                <p className="text-sm text-dark-background-color font-medium tracking-[0.2px] text-center w-2/3 mx-auto">
                  {testimonial.description}
                </p>

                <Rating
                  style={{ maxWidth: 150 }}
                  value={testimonial?.rating}
                  readOnly
                />
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="font-bold tracking-[0.2px] text-dark-background-color">
                    {testimonial.name}
                  </p>
                  <p className="text-sm tracking-[0.2px] text-dark-background-color">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </Marquee>
    </Container>
  );
};

export default Testimonial;
