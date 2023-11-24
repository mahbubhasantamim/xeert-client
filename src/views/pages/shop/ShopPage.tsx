import { useState } from "react";
import FilterSideBar from "../../../components/FilterSideBar/FilterSideBar";
import PaginationComp from "../../../components/Pagination/PaginationComp";
import ProductCard from "../../../components/ProductCard/ProductCard";

function ShopPage() {
  const products = [
    {
      _id: "01",
      productName: "Blue T-shirt",
      productImg: "/img/prd1.png",
      productPrice: 200,
      discount: 5,
      stock: 10,
    },
    {
      _id: "02",
      productName: "Blue T-shirt",
      productImg: "/img/prd2.png",
      productPrice: 349,
      discount: 10,
      stock: 20,
    },
    {
      _id: "03",
      productName: "Blue T-shirt",
      productImg: "/img/prd3.png",
      productPrice: 1990,
      stock: 10,
    },
    {
      _id: "04",
      productName: "Blue T-shirt",
      productImg: "/img/prd1.png",
      productPrice: 199,
      stock: 10,
    },
    {
      _id: "05",
      productName: "Blue T-shirt",
      productImg: "/img/prd2.png",
      productPrice: 349,
      stock: 10,
    },
    {
      _id: "06",
      productName: "Blue T-shirt",
      productImg: "/img/prd3.png",
      productPrice: 1990,
      stock: 10,
    },
    {
      _id: "07",
      productName: "Blue T-shirt",
      productImg: "/img/prd1.png",
      productPrice: 199,
      stock: 10,
    },
    {
      _id: "08",
      productName: "Blue T-shirt",
      productImg: "/img/prd2.png",
      productPrice: 349,
      discount: 25,
      stock: 10,
    },
    {
      _id: "09",
      productName: "Blue T-shirt",
      productImg: "/img/prd3.png",
      productPrice: 1990,
      stock: 10,
    },
    {
      _id: "10",
      productName: "Blue T-shirt",
      productImg: "/img/prd1.png",
      productPrice: 199,
      stock: 0,
    },
    {
      _id: "07",
      productName: "Blue T-shirt",
      productImg: "/img/prd1.png",
      productPrice: 199,
      stock: 10,
    },
    {
      _id: "08",
      productName: "Blue T-shirt",
      productImg: "/img/prd2.png",
      productPrice: 349,
      discount: 25,
      stock: 10,
    },
    {
      _id: "09",
      productName: "Blue T-shirt",
      productImg: "/img/prd3.png",
      productPrice: 1990,
      stock: 10,
    },
    {
      _id: "10",
      productName: "Blue T-shirt",
      productImg: "/img/prd1.png",
      productPrice: 199,
      stock: 10,
    },
  ];

  const itemsPerPage = 10; // Number of items to display per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <div>
          <div className="py-4 text-center text-primary dark:text-secondary">
            <h2 className="text-lg sm:text-xl md:text-2xl tracking-wide after:block after:border-b-2 after:w-20 after: after:mx-auto after:my-1 after:dark:border-darkPrimary">
              Shop
            </h2>
          </div>
          <div className="grid grid-cols-6 px-6">
            <div className="md:col-span-1 ">
              <FilterSideBar />
            </div>

            <div className="col-span-6 md:col-span-5 px-6">
              <div className="bg-slate-50 flex justify-between p-3 text-xs rounded-md text-primary shadow-sm dark:bg-darkPrimary dark:text-secondary">
                <div>
                  <p>{`There are ${products.length} products`}</p>
                </div>
                <div>
                  <p>Sort by price, high to low</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-4">
                {currentItems?.map((product, index) => {
                  return <ProductCard key={index} productInfo={product} />;
                })}
              </div>

              <PaginationComp
                currentPage={currentPage}
                totalPages={Math.ceil(products.length / itemsPerPage)}
                onPageChange={paginate}
                itemsLength={products.length}
                firstItem={indexOfFirstItem}
                lastItem={indexOfLastItem}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
