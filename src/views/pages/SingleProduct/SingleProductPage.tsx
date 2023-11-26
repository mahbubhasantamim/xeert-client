import { useParams } from "react-router-dom";
import { products } from "../../../data/demoData";
import ErrorPage from "../error/Error.page";
import ProductDetailsComp from "./components/ProductDetails/ProductDetailsComp";
import ProductOthInfo from "./components/ProductOthInfo/ProductOthInfo";

export default function SingleProductPage() {
  const { productId } = useParams();

  const product = products.filter((product) => {
    if (product._id === productId) {
      return product;
    }
  });

  if (!(product.length > 0)) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="md:w-4/5 px-8 md:px-0 mx-auto pt-10">
        <ProductDetailsComp product={product[0]} />
        <ProductOthInfo />
      </div>
    </>
  );
}
