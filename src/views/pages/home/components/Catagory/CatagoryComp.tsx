import LinkBtn from "../../../../../components/shared/LinkBtn/LinkBtn";

function CatagoryComp() {
  const catagories = [
    {
      catagoryName: "Shirt",
      catagoryUrl: "shirt",
      catagoryImg: "./img/cat1.png",
    },
    {
      catagoryName: "T-shirt",
      catagoryUrl: "tshirt",
      catagoryImg: "./img/cat1.png",
    },
    {
      catagoryName: "Tops",
      catagoryUrl: "tshirt",
      catagoryImg: "./img/cat1.png",
    },
    {
      catagoryName: "Shorts",
      catagoryUrl: "tshirt",
      catagoryImg: "./img/cat1.png",
    },
  ];
  return (
    <>
      <div className="px-8 md:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {catagories?.map((catagory, index) => {
            return (
              <div key={index} className="relative">
                <div className="">
                  <img src={catagory.catagoryImg} alt={catagory.catagoryName} />
                </div>
                <div className="absolute bottom-3 w-full text-center">
                  <LinkBtn
                    to={`catagory/${catagory.catagoryUrl}`}
                    type="primary"
                    className="w-3/5"
                  >
                    {catagory.catagoryName}
                  </LinkBtn>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CatagoryComp;
