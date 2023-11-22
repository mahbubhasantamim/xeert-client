import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function FooterComp() {
  const siteName = "xeert";

  return (
    <>
      <div className="bg-secondary dark:bg-darkPrimary border-t">
        <div className="md:w-4/5 px-8 md:px-0 mx-auto py-10 ">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <Link
                to="/"
                className="uppercase font-semibold font-Fira-Sans tracking-widest text-lg  text-primary dark:text-secondary"
              >
                {siteName.split("").map((item, index, array) => {
                  if (index === array.length - 1) {
                    return <span key={index}>{item}</span>;
                  } else {
                    return (
                      <span key={index}>
                        {item}
                        <span className="text-secondary dark:text-darkPrimary">
                          {" "}
                          •{" "}
                        </span>
                      </span>
                    );
                  }
                })}
              </Link>

              <p className="font-Edu-nsw text-xs my-2 sm:my-6 text-primary dark:text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis non provident adipisci qui quae neque?
              </p>

              <div className="flex gap-2">
                <Link
                  to=""
                  className="bg-primary p-2 text-secondary rounded-full hover:bg-darkPrimary"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to=""
                  className="bg-primary p-2 text-secondary rounded-full hover:bg-darkPrimary"
                >
                  <AiFillInstagram />
                </Link>
                <Link
                  to=""
                  className="bg-primary p-2 text-secondary rounded-full hover:bg-darkPrimary"
                >
                  <MdEmail />
                </Link>
              </div>
            </div>

            <div className="text-primary dark:text-secondary">
              <h3 className="text-lg">Products</h3>
              <div className="flex flex-col gap-2 text-xs mt-2 sm:mt-6">
                <Link to="" className="hover:underline">
                  New product
                </Link>
                <Link to="" className="hover:underline">
                  Drop price
                </Link>
                <Link to="" className="hover:underline">
                  Best sales
                </Link>
              </div>
            </div>

            <div className="text-primary dark:text-secondary">
              <h3 className="text-lg">Information</h3>
              <div className="flex flex-col gap-2 text-xs mt-2 sm:mt-6">
                <Link to="" className="hover:underline">
                  Delivery
                </Link>
                <Link to="" className="hover:underline">
                  Terms & condition
                </Link>
                <Link to="" className="hover:underline">
                  About us
                </Link>
                <Link to="" className="hover:underline">
                  Contact us
                </Link>
              </div>
            </div>

            <div className="text-primary dark:text-secondary">
              <h3 className="text-lg">Your account</h3>
              <div className="flex flex-col gap-2 text-xs mt-2 sm:mt-6">
                <Link to="" className="hover:underline">
                  Personal info
                </Link>
                <Link to="" className="hover:underline">
                  Adress
                </Link>
                <Link to="" className="hover:underline">
                  Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterComp;
