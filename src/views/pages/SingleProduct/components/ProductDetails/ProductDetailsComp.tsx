import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCartOutline, IoWalletOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TiTick, TiTimes } from "react-icons/ti";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";
import { useCartStore } from "../../../../../store/cartStore";

type ProductPropType = {
  product: {
    _id: string;
    productName: string;
    productImg: string;
    productPrice: number;
    discountPrice: number;
    discount: number;
    stock: number;
    productDesc: string;
    size: string[];
  };
};
type InputType = {
  size: string;
  quantity: number;
};
export default function ProductDetailsComp({ product }: ProductPropType) {
  const inputSchema: ZodType<InputType> = z.object({
    size: z.string().min(1, { message: "Select a option" }),
    quantity: z
      .number()
      .min(1, { message: "Minimum 1 product" })
      .max(5, { message: "Maximum 5 product" }),
  });

  const [count, setCount] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const cartQuantitySum = cartItems.reduce((prev, current) => {
    if (current._id === product._id) {
      prev += current.quantity;
    }
    return prev;
  }, 0);

  // console.log(cartQuantity);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      quantity: count,
    },
  });

  const inc = () => {
    setCount((prev) => prev + 1);
    setValue("quantity", count + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
    setValue("quantity", count - 1);
  };

  const onSubmit = (data: InputType) => {
    const cart = {
      ...product,
      size: data.size,
      quantity: data.quantity,
    };
    addToCart(cart);
    toast.success(`${product.productName} added to cart`);
  };
  return (
    <>
      <div className="sm:grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <div>
            <img
              src={product?.productImg}
              alt={product?.productName}
              className="w-3/4 sm:w-full mx-auto"
            />
          </div>
        </div>

        <div className="col-span-4">
          <div className="border-b pb-4 sm:pb-6 dark:text-secondary dark:border-b-darkPrimary">
            <h1 className="text-2xl sm:text-3xl text-center sm:text-left font-semibold text-primary dark:text-secondary">
              {product?.productName}
            </h1>
            <p className="my-4 text-center sm:text-left">
              {product?.discount ? (
                <>
                  <span className="text-2xl mr-2">{`${product?.discountPrice} Tk`}</span>
                  <span className="line-through">{`${product?.productPrice}Tk`}</span>
                </>
              ) : (
                <span className="text-2xl mr-2">{`${product?.productPrice} Tk`}</span>
              )}
            </p>
            <p className="text-xs">{product?.productDesc}</p>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex sm:flex-col items-center gap-4 py-6 sm:py-8 sm:items-start dark:text-secondary">
                <div className="flex items-center gap-1">
                  <label htmlFor="" className="text-base">
                    Size
                  </label>
                  <select
                    {...register("size")}
                    className="px-2 py-1 border bg-slate-100 rounded-sm text-xs dark:bg-darkPrimary"
                  >
                    <option value="">select</option>
                    {product?.size?.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <span className="text-xs text-red-600">
                    {errors.size?.message}
                  </span>
                </div>

                <div className="flex gap-1 items-center">
                  <label htmlFor="" className="text-base">
                    Quantity
                  </label>
                  <div className="flex border-2 dark:border-darkPrimary">
                    <button
                      type="button"
                      disabled={count <= 1}
                      onClick={dec}
                      className="px-2 bg-slate-200 dark:bg-darkPrimary"
                    >
                      -
                    </button>
                    <input
                      {...register("quantity", {
                        valueAsNumber: true,
                      })}
                      type="number"
                      className="p-1 w-10 text-xs bg-transparent border-none rounded-sm"
                    />
                    <button
                      type="button"
                      disabled={
                        count >= 5 ||
                        count >= product?.stock ||
                        count + cartQuantitySum >= product?.stock
                      }
                      onClick={inc}
                      className="px-2 bg-slate-200 dark:bg-darkPrimary"
                    >
                      +
                    </button>
                  </div>
                  <span>{errors.quantity?.message}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={product?.stock - cartQuantitySum < 1}
                  className="flex items-center gap-1 uppercase bg-primary text-secondary py-2 px-6 text-xs rounded-sm shadow-md hover:bg-slate-500 dark:bg-secondary dark:text-primary dark:hover:bg-slate-400"
                >
                  <div className="text-xl">
                    <IoCartOutline />
                  </div>
                  {product?.stock - cartQuantitySum < 1
                    ? "Out of stock"
                    : "Add to cart"}
                </button>
                {product?.stock - cartQuantitySum < 1 ? (
                  <span className="flex items-center text-red-500">
                    <TiTimes /> Out of stock
                  </span>
                ) : (
                  <span className="flex items-center text-green-400">
                    <TiTick /> In stock
                  </span>
                )}
              </div>
            </form>
          </div>

          <div className="py-6">
            <div className="flex justify-center gap-2 sm:gap-10 py-3 border-y dark:border-y-darkPrimary">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="text-3xl text-slate-400">
                  <IoWalletOutline />
                </div>
                <p className="text-xs text-primary dark:text-secondary">
                  Discount system
                </p>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <div className="text-3xl text-slate-400">
                  <CiDeliveryTruck />
                </div>
                <p className="text-xs text-primary dark:text-secondary">
                  Free delivery
                </p>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <div className="text-3xl text-slate-400">
                  <MdOutlineSupportAgent />
                </div>
                <p className="text-xs text-primary dark:text-secondary">
                  Support 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
