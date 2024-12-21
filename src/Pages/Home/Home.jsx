import Banner from "../../Components/Banner/Banner";
import Courses from "../../Components/Courses/Courses";
import ExpertBanner from "../../Components/ExpertBanner/ExpertBanner";
import PopularCourse from "../../Components/PopularCourse/PopularCourse";
import PracticeAdvice from "../../Components/PracticeAdvice/PracticeAdvice";
import Stats from "../../Components/Stats/Stats";
import Team from "../../Components/Team/Team";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="space-y-[120px]">
      <Banner />
      <Stats />
      <ExpertBanner />
      <PracticeAdvice />
      <Courses />
      <PopularCourse />
      <Testimonial />
      <Team />
    </div>
  );
};

export default Home;
