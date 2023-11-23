import AdvantageComp from "./components/Advantage/AdvantageComp";
import CatagoryComp from "./components/Catagory/CatagoryComp";
import HeroComp from "./components/Hero/HeroComp";
import SingleCatSec from "./components/SingleCatSec/SingleCatSec";
import TopTrendingComp from "./components/TopTrending/TopTrendingComp";

const HomePage = () => {
  return (
    <>
      <HeroComp />
      <AdvantageComp />
      <CatagoryComp />
      <TopTrendingComp />
      <SingleCatSec />
    </>
  );
};

export default HomePage;
