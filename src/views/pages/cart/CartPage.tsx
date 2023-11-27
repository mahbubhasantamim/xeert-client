import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";
import LinkBtn from "../../../components/shared/LinkBtn/LinkBtn";

export default function CartPage() {
  return (
    <>
      <div className="md:w-4/5 px-8 md:px-0 mx-auto py-3 grid grid-cols-4 gap-2">
        <div className="col-span-3 dark:bg-darkPrimary dark:text-secondary">
          <div>
            <h3 className="text-center py-4 font-bold">Shopping cart</h3>
          </div>

          <div className="relative hover:bg-white dark:hover:bg-primary border-t">
            <div className="absolute right-2 top-2 p-1 hover:bg-primary hover:text-secondary hover:cursor-pointer rounded-full dark:hover:bg-secondary dark:hover:text-primary">
              <TiTimes />
            </div>
            <Link to="">
              <div className="flex gap-3 border-b p-2 dark:border-b-primary">
                <div className="w-24">
                  <img src="/img/prd1.png" alt="" />
                </div>
                <div className="flex flex-col text-xs">
                  <h3 className="text-sm font-semibold">T-shirt</h3>
                  <p className="pb-4 text-lg">৳ 199</p>
                  <p>
                    Size: <span className="font-semibold">XL</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-slate-100 dark:bg-primary pb-4">
            <div className="flex justify-between p-4 text-xs">
              <p>2 items</p> <p>299 Tk</p>
            </div>
            <div className="text-center">
              <LinkBtn to="" color="dark">
                Processed to checkout
              </LinkBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
