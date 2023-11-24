export default function FilterSideBar() {
  return (
    <>
      <div>
        <h3 className="mb-3 uppercase">Filter by</h3>
        <div>
          <h3 className="px-1 border-l-2 border-primary dark:border-darkPrimary">
            Price range
          </h3>
        </div>
        <div className="py-3">
          <h3 className="px-1 border-l-2 border-primary dark:border-darkPrimary">
            Categories
          </h3>
          <div className="text-xs py-1">
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
        </div>

        <div className="py-3">
          <h3 className="px-1 border-l-2 border-primary dark:border-darkPrimary">
            Color
          </h3>
          <div className="text-xs py-1">
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
    </>
  );
}
