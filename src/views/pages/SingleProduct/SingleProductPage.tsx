import ProductDetailsComp from "./components/ProductDetails/ProductDetailsComp";
import ProductOthInfo from "./components/ProductOthInfo/ProductOthInfo";

export default function SingleProductPage() {
  return (
    <>
      <div className="md:w-4/5 px-8 md:px-0 mx-auto pt-10">
        <ProductDetailsComp />
        <ProductOthInfo />
      </div>
    </>
  );
}
