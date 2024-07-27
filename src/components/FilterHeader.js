import React from "react";


const FilterHeader = (props) => {
  const handleClearAll = () => {
    props.handleClearAll();
  };
  return <>
            { ((props.globalFilter && props.globalFilter.length > 0) || (props.yearFilter && props.yearFilter.length > 0) || (props.milageFilter && props.milageFilter.length > 0))&& 
                <div className="flex bg-slate-100 h-16 p-4 sticky sticky top-0">
                   <button type="button" onClick={handleClearAll} className="py-2.5 px-5 me-2 h-fit text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Clear All</button>
                   <div className="text-center content-around items-center">Filter By: </div>
                    {
                      props.globalFilter && props.globalFilter.length > 0 &&
                      props.globalFilter.map((filter, id) => (
                        <div key={id}>
                          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{filter.value}</button>
                        </div>
                      ))
                    }
                    {
                      props.yearFilter && props.yearFilter.length > 0 && 
                      <div>
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{props.yearFilter}</button>
                      </div> 
                    }
                    {
                      props.milageFilter && props.milageFilter.length > 0 && 
                      <div>
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{props.milageFilter}</button>
                      </div> 
                    }
                </div>
                }
        </>
};

export default FilterHeader;