import { TiTimes } from "react-icons/ti";
import { Link } from "react-router-dom";
import LinkBtn from "../shared/LinkBtn/LinkBtn";

export default function CartComp({ fn }: { fn: (x: boolean) => void }) {
  return (
    <>
      <div className="absolute top-12 right-0 shadow-lg bg-slate-50 w-72 border-2 dark:bg-darkPrimary dark:border-black dark:text-secondary z-50">
        <div className="bg-slate-100 dark:bg-primary relative">
          <div
            onClick={() => fn(false)}
            className="absolute right-2 top-2 p-1 bg-primary text-secondary hover:bg-slate-600 hover:cursor-pointer rounded-full dark:bg-secondary dark:text-primary dark:hover:bg-slate-400"
          >
            <TiTimes />
          </div>
          <h3 className="text-center py-4 font-bold">Shopping cart</h3>
        </div>

        <div className="relative hover:bg-white dark:hover:bg-primary">
          <div className="absolute right-2 top-2 p-1 hover:bg-primary hover:text-secondary hover:cursor-pointer rounded-full dark:hover:bg-secondary dark:hover:text-primary">
            <TiTimes />
          </div>
          <Link to="">
            <div className="flex gap-3 border-b p-2 dark:border-b-primary">
              <div className="w-14">
                <img src="/img/prd1.png" alt="" />
              </div>
              <div className="flex flex-col text-xs">
                <h3 className="text-sm font-semibold">T-shirt</h3>
                <p>
                  Size: <span className="font-semibold">XL</span>
                </p>
                <p>
                  <span className="text-xl">৳ 199</span> x 2
                </p>
              </div>
            </div>
          </Link>
        </div>

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
    </>
  );
}
