import { Pagination } from "flowbite-react";

type PropType = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  itemsLength: number;
  firstItem: number;
  lastItem: number;
};
export default function PaginationComp({
  currentPage,
  totalPages,
  onPageChange,
  itemsLength,
  firstItem,
  lastItem,
}: PropType) {
  return (
    <>
      <div className="bg-slate-50 md:flex text-center justify-between py-2 px-4 mb-4 text-xs rounded-md text-primary  dark:bg-darkPrimary dark:text-secondary">
        <div className="flex items-center justify-center">
          <p>{`Showing ${firstItem + 1}-${
            itemsLength < lastItem ? itemsLength : lastItem
          } of ${itemsLength} item(s)`}</p>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
