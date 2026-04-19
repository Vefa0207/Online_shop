import ReactPaginateLib from "react-paginate";

const ReactPaginate = (ReactPaginateLib as any).default || ReactPaginateLib;

interface IPaginateProps {
  itemsPerPage: number;
  totalItems: number;
  setCurrentItems: (items: any[]) => void;
  items: any[];
}

const Paginate = ({
  itemsPerPage,
  totalItems,
  setCurrentItems,
  items,
}: IPaginateProps) => {
  const handlePageClick = (e: { selected: number }) => {
    const newOffset =  e.selected * itemsPerPage;
    const endOffset = newOffset + itemsPerPage;
    setCurrentItems(items.slice(newOffset, endOffset));
    window.scrollTo(0, 0);
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      previousLabel="< Prev"
      onPageChange={handlePageClick}
      pageCount={pageCount}
      pageRangeDisplayed={4}
      marginPagesDisplayed={3}

      containerClassName="pagination"
      pageClassName="page_item"
      pageLinkClassName="page_link"

      previousClassName="page_item"
      previousLinkClassName="page_link"

      nextClassName="page_item"
      nextLinkClassName="page_link"

      breakClassName="page_item"
      breakLinkClassName="page_link"

      activeClassName="active"
      disabledClassName="disabled"
    />
  );
};

export default Paginate;