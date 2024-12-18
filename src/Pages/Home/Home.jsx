import Banner from "../../Components/Banner/Banner"
import Courses from "../../Components/Courses/Courses"
import ExpertBanner from "../../Components/ExpertBanner/ExpertBanner"
import PracticeAdvice from "../../Components/PracticeAdvice/PracticeAdvice"
import Stats from "../../Components/Stats/Stats"

const Home = () => {
  return (
    <div className="space-y-[120px]">
      <Banner/>
      <Stats/>
      <ExpertBanner/>
      <PracticeAdvice/>
      <Courses/>
    </div>
  )
}

export default Home