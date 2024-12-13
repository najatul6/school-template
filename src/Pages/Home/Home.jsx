import Banner from "../../Components/Banner/Banner"
import ExpertBanner from "../../Components/ExpertBanner/ExpertBanner"
import PracticeAdvice from "../../Components/PracticeAdvice/PracticeAdvice"
import Stats from "../../Components/Stats/Stats"

const Home = () => {
  return (
    <div className="">
      <Banner/>
      <Stats/>
      <ExpertBanner/>
      <PracticeAdvice/>
    </div>
  )
}

export default Home