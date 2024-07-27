import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = (props) => {
  const handlePageClick = (e) => {
    props.handlePageClick(e);
  };
 return (
    <div className="grid grid-cols-1">
    <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={Math.ceil(props.total / props.postsPerPage)}
        previousLabel={'Prev'}
        nextLabel={'Next'}
        containerClassName={'pagination  flex justify-center items-center border-gray-200 bg-white px-4 py-3 sm:px-6'}
        pageLinkClassName={'page-number relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'}
        previousLinkClassName={'page-number relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'}
        nextLinkClassName={'page-number relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'}
        activeLinkClassName={'active relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'}
      />
      </div>
  )
}
export default Pagination;