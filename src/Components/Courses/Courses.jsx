import { useState } from "react";
import Container from "../Shared/Container/Container";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import { useEffect } from "react";
import LoadingCard from "../Shared/LoadingCard/LoadingCard";

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
      <div>
          {
          loading ? <LoadingCard/>:courses.map((course,id) => {
                return (
                    <div key={id} className="flex w-52 flex-col gap-4">
                        <img src={course.image} alt={course.title} className="h-32 w-full object-cover"/>
                        <h2 className="text-lg font-semibold">{course.title}</h2>
                        <p className="text-sm text-gray-500">{course.description}</p>
                        <p className="text-sm text-gray-500">{course.lessons} lessons</p>
                    </div>
                );
          })
          }
      </div>
    </Container>
  );
};

export default Courses;
