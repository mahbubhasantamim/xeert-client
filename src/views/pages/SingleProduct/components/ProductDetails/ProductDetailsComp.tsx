import { CiDeliveryTruck } from "react-icons/ci";
import { IoCartOutline, IoWalletOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router-dom";

export default function ProductDetailsComp() {
  const { productId } = useParams();

  return (
    <>
      <div className="sm:grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <div>
            <img
              src="/img/prd1.png"
              alt=""
              className="w-3/4 sm:w-full mx-auto"
            />
          </div>
        </div>

        <div className="col-span-4">
          <div className="border-b pb-4 sm:pb-6 dark:text-secondary dark:border-b-darkPrimary">
            <h1 className="text-2xl sm:text-3xl text-center sm:text-left font-semibold text-primary dark:text-secondary">
              Mens blue shirt {productId}
            </h1>
            <p className="my-4 text-center sm:text-left">
              <span className="text-2xl mr-2">{`299 Tk`}</span>
              <span className="line-through">{`399Tk`}</span>
            </p>
            <p className="text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              sequi mollitia obcaecati illum eos accusantium atque quas
              perspiciatis dignissimos officiis, labore nam voluptatum
              laudantium iure similique fuga repellendus nesciunt facilis
              quibusdam doloribus? Ut ullam laborum repellat asperiores
              perferendis tempore optio.
            </p>
          </div>

          <div>
            <form action="">
              <div className="flex sm:flex-col items-center gap-4 py-6 sm:py-8 sm:items-start dark:text-secondary">
                <div className="flex items-center gap-1">
                  <label htmlFor="" className="text-base">
                    Size
                  </label>
                  <select
                    name=""
                    id=""
                    className="px-2 py-1 border bg-slate-100 rounded-sm text-xs dark:bg-darkPrimary"
                  >
                    <option value="">XL</option>
                    <option value="">XL</option>
                    <option value="">XL</option>
                    <option value="">XL</option>
                  </select>
                </div>

                <div className="flex gap-1 items-center">
                  <label htmlFor="" className="text-base">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={1}
                    className="p-1 w-14 text-xs bg-slate-100 rounded-sm dark:bg-darkPrimary"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex items-center gap-1 uppercase bg-primary text-secondary py-2 px-6 text-xs rounded-sm shadow-md hover:bg-slate-500 dark:bg-secondary dark:text-primary dark:hover:bg-slate-400"
                >
                  <div className="text-xl">
                    <IoCartOutline />
                  </div>
                  Add to cart
                </button>
                <span className="flex items-center text-green-400">
                  <TiTick /> In stock
                </span>
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
