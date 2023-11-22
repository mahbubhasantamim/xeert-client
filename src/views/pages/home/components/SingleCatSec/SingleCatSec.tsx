import Button from "../../../../../components/shared/Button/Button";

function SingleCatSec() {
  return (
    <>
      <div className="bg-slate-50 dark:bg-darkPrimary">
        <div className="grid sm:grid-cols-2">
          <div className="">
            <img src="./img/ca.png" alt="" className="w-full h-full" />
          </div>
          <div className="flex justify-center items-center">
            <div>
              <div className="py-6 sm:py-0 px-4 text-center text-primary dark:text-secondary">
                <h2 className="text-lg sm:text-2xl md:text-3xl tracking-wide after:block after:border-b-2 after:w-20 after: after:mx-auto after:my-2 md:after:my-6 after:dark:border-primary">
                  Bages & Shoes
                </h2>
                <p className="text-xs font-Edu-nsw md:w-4/5 lg:w-4/5 mx-auto mb-3 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus animi, recusandae voluptates officiis inventore non
                  incidunt
                </p>
                <Button type="outline">Descover more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCatSec;
