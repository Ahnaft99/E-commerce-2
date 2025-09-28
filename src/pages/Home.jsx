import Add from "../components/Add"
import Arrivals from "../components/Arrivals"
import Banner from "../components/Banner"
import Information from "../components/Information"
import Special from "../components/Special"

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Information></Information>
      <Add></Add>
      <Arrivals></Arrivals>
      <Special></Special>
    </>
  )
}

export default Home