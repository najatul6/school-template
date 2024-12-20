import Marquee from "react-fast-marquee";
import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

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
      <div>
        <Marquee>
          {loading ? (
            <p>Loading...</p>
          ) : (
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-6"
              >
                <div className="flex flex-col justify-center items-center gap-5 bg-light-color p-[25px]">
                  <img
                    src={testimonial.profilePic}
                    alt={testimonial.name}
                    className="w-[128px] h-[128px] rounded-full"
                  />
                  <p className="text-sm font-medium tracking-[0.2px] text-center">
                    {testimonial.description}
                  </p>

                  <div className="bg-danger-color">
                    <Rating
                      
                      value={testimonial.rating}
                      readOnly
                    />
                  </div>
                </div>
                <p className="text-sm font-medium tracking-[0.2px] text-dark-background-color">
                  {testimonial.review}
                </p>
              </div>
            ))
          )}
        </Marquee>
      </div>
    </Container>
  );
};

export default Testimonial;
