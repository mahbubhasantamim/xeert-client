import AdvantageComp from "./components/Advantage/AdvantageComp";
import CatagoryComp from "./components/Catagory/CatagoryComp";
import HeroComp from "./components/Hero/HeroComp";
import TopTrendingComp from "./components/TopTrending/TopTrendingComp";

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="">
          <HeroComp />
          <AdvantageComp />
          <CatagoryComp />
          <TopTrendingComp />
        </div>
      </div>
    </>
  );
};

export default HomePage;
