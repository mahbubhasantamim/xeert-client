import CatagoryComp from "./components/Catagory/CatagoryComp";
import HeroComp from "./components/Hero/HeroComp";

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="">
          <HeroComp />
          <CatagoryComp />
        </div>
      </div>
    </>
  );
};

export default HomePage;
