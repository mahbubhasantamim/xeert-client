import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdShare } from "react-icons/io";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function SiteTitle() {
  const siteName = "xeert";
  const sName = siteName.split("");

  return (
    <>
      <div className="md:w-4/5 px-8 md:px-0 mx-auto py-4 flex justify-between border-b dark:border-black">
        <div className="flex gap-4 text-primary dark:text-secondary">
          <div className="text-xl">
            <HiBars3BottomLeft />
          </div>
          <div className="text-xl">
            <IoSearch />
          </div>
        </div>
        <div>
          <Link
            to="/"
            className="uppercase font-semibold font-Fira-Sans tracking-widest text-lg text-primary dark:text-secondary"
          >
            {sName.map((item, index, array) => {
              if (index === array.length - 1) {
                return <span key={index}>{item}</span>;
              } else {
                return (
                  <span key={index}>
                    {item}
                    <span className="text-secondary dark:text-black"> • </span>
                  </span>
                );
              }
            })}
          </Link>
        </div>
        <div className="flex gap-4 text-primary dark:text-secondary">
          <div className="text-xl">
            <IoMdShare />
          </div>
          <div className="text-xl">
            <IoCartOutline />
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteTitle;
