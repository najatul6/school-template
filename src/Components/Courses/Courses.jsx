import { useState } from "react";
import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import { useEffect } from "react";
import LoadingCard from "../Shared/LoadingCard/LoadingCard";
import ProductCard from "../Shared/ProductCard/ProductCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);
  console.log(courses.length);
  return (
    <Container>
    <div className="w-1/2">
      <SectionHeader
        title={"Most Popular Courses"}
        subTitle={"Courses"}
        description={
          "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        }
      />
    </div>
    <div>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <LoadingCard key={index} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <div key={course?.id}>
              <ProductCard course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  </Container>
  );
};

export default Courses;
