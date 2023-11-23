import ProductCard from "../../../../../components/ProductCard/ProductCard";
import Button from "../../../../../components/shared/Button/Button";
import LinkBtn from "../../../../../components/shared/LinkBtn/LinkBtn";

function TopTrendingComp() {
  const products = [
    {
      _id: "01",
      productName: "Blue T-shirt",
      productImg: "./img/prd1.png",
      productPrice: 200,
      discount: 5,
    },
    {
      _id: "02",
      productName: "Blue T-shirt",
      productImg: "./img/prd2.png",
      productPrice: 349,
      discount: 10,
    },
    {
      _id: "03",
      productName: "Blue T-shirt",
      productImg: "./img/prd3.png",
      productPrice: 1990,
    },
    {
      _id: "04",
      productName: "Blue T-shirt",
      productImg: "./img/prd1.png",
      productPrice: 199,
    },
    {
      _id: "05",
      productName: "Blue T-shirt",
      productImg: "./img/prd2.png",
      productPrice: 349,
    },
    {
      _id: "06",
      productName: "Blue T-shirt",
      productImg: "./img/prd3.png",
      productPrice: 1990,
    },
    {
      _id: "07",
      productName: "Blue T-shirt",
      productImg: "./img/prd1.png",
      productPrice: 199,
    },
    {
      _id: "08",
      productName: "Blue T-shirt",
      productImg: "./img/prd2.png",
      productPrice: 349,
      discount: 25,
    },
    {
      _id: "09",
      productName: "Blue T-shirt",
      productImg: "./img/prd3.png",
      productPrice: 1990,
    },
    {
      _id: "10",
      productName: "Blue T-shirt",
      productImg: "./img/prd1.png",
      productPrice: 199,
    },
  ];
  return (
    <>
      <div className="px-4 md:px-12 py-6 md:py-10 text-primary dark:text-secondary">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl tracking-wider  after:block after:border-b-2 after:w-20 after:dark:border-darkPrimary after:mx-auto after:my-4 md:after:my-6">
            Top Trending
          </h2>
          <p className="text-xs font-Edu-nsw md:w-4/5 lg:w-3/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            animi, recusandae voluptates officiis inventore non incidunt, eos
            placeat deserunt voluptatibus illum neque sunt labore! Fugiat
            laudantium nesciunt adipisci voluptatibus aperiam?
          </p>
        </div>

        <div>
          <div className="flex justify-center gap-2 md:gap-4 py-6">
            <Button type="arrow">New products</Button>
            <Button type="arrow">Price drop</Button>
            <Button type="arrow">Best sales</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
          {products?.map((product, index) => {
            return <ProductCard key={index} productInfo={product} />;
          })}
        </div>
        <div className="text-center pt-6">
          <LinkBtn to="" color="dark">
            ALL PRODUCTS
          </LinkBtn>
        </div>
      </div>
    </>
  );
}

export default TopTrendingComp;
