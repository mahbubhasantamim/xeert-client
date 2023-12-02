import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";
import LinkBtn from "../../../components/shared/LinkBtn/LinkBtn";
import { useCartStore } from "../../../store/cartStore";

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeCartItem = useCartStore((state) => state.removeFromCart);
  const incQuantity = useCartStore((state) => state.incQuantity);
  const decQuantity = useCartStore((state) => state.decQuantity);

  const getTotal = cartItems.reduce((prev, item) => {
    const price = item.discount ? item.discountPrice : item.productPrice;
    return prev + price * item.quantity;
  }, 0);
  return (
    <>
      <div className="md:w-4/5 mx-auto">
        <h3 className="text-center py-4 font-bold border-b">Shopping cart</h3>

        <div className="px-8 md:px-0  py-3 md:grid grid-cols-4 gap-2">
          <div className="col-span-3 dark:bg-darkPrimary dark:text-secondary">
            {cartItems.map((product, index) => {
              return (
                <div
                  key={index}
                  className="relative hover:bg-slate-50 dark:hover:bg-primar"
                >
                  <div className="flex gap-3 border-b p-2 dark:border-b-primary">
                    <div className="w-24">
                      <img src={product?.productImg} alt="" />
                    </div>

                    <div className="flex justify-between gap-4 text-xs w-full">
                      <div>
                        <Link to={`/products/${product?._id}`}>
                          <h3 className="text-base font-semibold pb-1">
                            {product?.productName}
                          </h3>
                        </Link>

                        <p className="pb-4 text-lg">
                          ৳{" "}
                          {product.discount
                            ? product.discountPrice
                            : product?.productPrice}
                        </p>
                        <p>
                          Size:{" "}
                          <span className="font-semibold">{product?.size}</span>
                        </p>
                      </div>

                      <div className="flex items-center">
                        <div className="flex border-2 dark:border-darkPrimary">
                          <button
                            type="button"
                            disabled={product?.quantity <= 1}
                            onClick={() => decQuantity(product)}
                            className="px-2 bg-slate-200 dark:bg-darkPrimary"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={product?.quantity}
                            className="p-1 w-10 text-xs bg-transparent border-none rounded-sm"
                          />
                          <button
                            type="button"
                            disabled={
                              product?.quantity >= 5 ||
                              product.quantity >= product?.stock
                            }
                            onClick={() => incQuantity(product)}
                            className="px-2 bg-slate-200 dark:bg-darkPrimary"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center font-semibold text-base">
                        {product.discount
                          ? product.discountPrice * product.quantity
                          : product.productPrice * product.quantity}{" "}
                        Tk
                      </div>

                      <div>
                        <div
                          onClick={() => removeCartItem(product)}
                          className="absolute right-6 top-1/2 transform -translate-y-1/2 p-1 hover:bg-primary hover:text-secondary hover:cursor-pointer rounded-full dark:hover:bg-secondary dark:hover:text-primary"
                        >
                          <TiTimes />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-span-1">
            <div className="bg-slate-100 dark:bg-primary py-4">
              <div className="flex justify-between py-2 px-4 text-xs">
                <p>{cartItems.length} item(s)</p> <p>{getTotal} Tk</p>
              </div>
              <div className="flex justify-between py-2 px-4 text-xs border-b">
                <p>Shipping</p> <p>{120} Tk</p>
              </div>
              <div className="flex justify-between py-2 px-4 text-xs">
                <p>Total</p> <p>{getTotal + 120} Tk</p>
              </div>
              <div className="text-center pt-4">
                <LinkBtn to="" color="dark">
                  Processed to checkout
                </LinkBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
