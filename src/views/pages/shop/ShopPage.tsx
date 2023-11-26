import { useState } from "react";
import FilterSideBar from "../../../components/FilterSideBar/FilterSideBar";
import PaginationComp from "../../../components/Pagination/PaginationComp";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { products } from "../../../data/demoData";

function ShopPage() {
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
