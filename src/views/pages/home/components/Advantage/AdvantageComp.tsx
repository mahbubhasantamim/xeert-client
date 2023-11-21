import { CiDeliveryTruck } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";

function AdvantageComp() {
  return (
    <>
      <div className="px-4 md:px-12 py-10">
        <div className="grid md:grid-cols-3 text-center gap-4 md:gap-8 justify-center text-darkPrimary dark:text-secondary">
          <div className="text-center">
            <div className="flex justify-center text-5xl text-slate-400">
              <IoWalletOutline />
            </div>
            <h3 className="font-semibold my-1 md:my-3 tracking-wide">
              Discount system
            </h3>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam sunt dolorum alias porro, maxime molestiae?
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center text-5xl text-slate-400">
              <CiDeliveryTruck />
            </div>
            <h3 className="font-semibold my-1 md:my-3 tracking-wide">
              Free delivery
            </h3>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam sunt dolorum alias porro, maxime molestiae?
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center text-5xl text-slate-400">
              <MdOutlineSupportAgent />
            </div>
            <h3 className="font-semibold my-1 md:my-3 tracking-wide">
              Support 24/7
            </h3>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam sunt dolorum alias porro, maxime molestiae?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvantageComp;
