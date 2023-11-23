import { IoCart, IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

type ProspType = {
  productInfo: {
    _id: string;
    productName: string;
    productImg: string;
    productPrice: number;
    discount?: number;
  };
};
function ProductCard({ productInfo }: ProspType) {
  return (
    <>
      <div className="flex ">
        <div className=" relative text-center bg-slate-50 hover:bg-slate-200 shadow-md rounded-sm hover:cursor-pointer dark:bg-darkPrimary">
          {/* cart & view icon */}
          <div className="flex flex-col gap-2 bg-primary hover:bg-darkPrimary  p-2 rounded-md absolute top-3 right-3 z-50 text-secondary">
            <div className="hover:text-slate-400">
              <IoCart />
            </div>
            <div className="hover:text-slate-400">
              <IoEye />
            </div>
          </div>

          {/* product card  */}
          <Link to={productInfo._id}>
            <div className="relative hover:before:block before:hidden before:h-full before:w-full before:bg-primary before:opacity-30 before:hover:bg-slate-700  before:duration-500 before:absolute before:top-0 before:z-10">
              <img src={productInfo.productImg} alt="" />

              {/* discount & new label */}
              <div className="flex flex-col gap-1 p-2 rounded-md absolute top-2 left-1 z-50 text-secondary font-Edu-nsw">
                {productInfo.discount && (
                  <p className="py-[2px] px-3 text-xs text-center rounded-sm bg-red-500">
                    {`-${productInfo?.discount}%`}
                  </p>
                )}

                <p className="py-[2px] px-3 text-xs text-center rounded-sm bg-primary">
                  New
                </p>
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-xs text-primary dark:text-secondary">
                {productInfo.productName}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {productInfo?.discount ? (
                  <>
                    {Math.round(
                      productInfo.productPrice -
                        (productInfo.productPrice / 100) * productInfo.discount
                    )}
                    <span> Tk</span>{" "}
                    <span className="line-through">
                      {productInfo.productPrice}Tk
                    </span>
                  </>
                ) : (
                  <>
                    {productInfo.productPrice}
                    <span> Tk</span>
                  </>
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
