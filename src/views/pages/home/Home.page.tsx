import CatagoryComp from "./components/Catagory/CatagoryComp";
import HeroComp from "./components/Hero/HeroComp";
import TopTrendingComp from "./components/TopTrending/TopTrendingComp";

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="">
          <HeroComp />
          <CatagoryComp />
          <TopTrendingComp />
        </div>
      </div>
    </>
  );
};

export default HomePage;
