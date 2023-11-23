import ProductCard from "../../../components/ProductCard/ProductCard";

function ShopPage() {
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
      <div>
        <div>
          <div className="py-4 text-center text-primary dark:text-secondary">
            <h2 className="text-lg sm:text-xl md:text-2xl tracking-wide after:block after:border-b-2 after:w-20 after: after:mx-auto after:my-1 after:dark:border-primary">
              Shop
            </h2>
          </div>
          <div className="grid grid-cols-6 py-4">
            <div className="md:col-span-1 ">
              <div>
                <h3>Filter by</h3>
                <div>
                  <p>Price range</p>
                </div>
                <div>
                  <h3>Categories</h3>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Dresses</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Dresses</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Dresses</label>
                  </div>
                </div>

                <div>
                  <h3>Color</h3>
                  <div>
                    <label htmlFor="">Black</label>
                  </div>
                  <div>
                    <label htmlFor="">Red</label>
                  </div>
                  <div>
                    <label htmlFor="">Yellow</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6 md:col-span-5 px-6">
              <div className="bg-slate-50 flex justify-between p-3 text-xs rounded-md">
                <div>
                  <p>There are 5 products</p>
                </div>
                <div>
                  <p>Sort by price, high to low</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-4">
                {products?.map((product, index) => {
                  return <ProductCard key={index} productInfo={product} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
