import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard/ProductCard";
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
      <div className="md:w-4/5 px-8 md:px-0 mx-auto py-10">
        <ProductDetailsComp product={product[0]} />
        <ProductOthInfo />

        <div>
          <h2 className="text-center text-3xl py-4">You might also like</h2>
          <div className="flex gap-4">
            {products?.map((product, index) => {
              if (index < 4) {
                return <ProductCard key={index} productInfo={product} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
