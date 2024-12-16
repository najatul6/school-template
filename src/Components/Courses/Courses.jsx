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
    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);
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
      <div>{loading ? <LoadingCard /> : <div>{courses.map((course)=><div key={course?.id}><ProductCard course={course}/></div>)}</div>}</div>
    </Container>
  );
};

export default Courses;
