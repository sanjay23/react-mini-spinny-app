const ProductFilter = (props) => {
  
  const handleFilterClick = (event) => {
    var id = event.target.getAttribute('data-id');
    props.handleFilterClick(event.target.value,event.target.name, id);
  };
  const handleYearClick = (event) => {
    props.handleYearClick(event.target.value,event.target.name);
  };
  const handleMilageClick = (event) => {
    props.handleMilageClick(event.target.value,event.target.name);
  };
  return <div className="bg-white">
            <div className="text-left font-bold">Filters</div>
            <div className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root">
                <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                  <span className="font-medium text-gray-900">Brand</span>
                </button>
              </h3>
              <div className="pt-6" id="filter-section-0">
                <div className="">
                  {
                    props.filterData.brand && props.filterData.brand.length > 0 &&
                    props.filterData.brand.map((brand, id) => (
                      <div className="flex items-center" key={id}>
                        <input id={brand.brand_id} name="brand" data-id={brand.brand_id} value={brand.brand_name} onChange={ handleFilterClick}  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor={brand.brand_id} className="ml-3 text-sm text-gray-600">{brand.brand_name} ({brand.count})</label>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root">
                <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                  <span className="font-medium text-gray-900">Km driven</span>
                  
                </button>
              </h3>
              <div className="pt-6" id="filter-section-1">
                <div className="">
                  {
                    props.filterData.max_milage && props.filterData.max_milage.length > 0 &&
                    props.filterData.max_milage.map((milage, id) => (
                      <div className="flex items-center" key={id}>
                        <input id={milage.milage} name="milage" value={milage.milage} checked={props.milageFilter == milage.milage ? "checked" : ''}   onChange={ handleMilageClick} type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor={milage.milage} className="ml-3 text-sm text-gray-600">{milage.milage} Km or less ({milage.count})</label>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root">
                <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                  <span className="font-medium text-gray-900">Year</span>
                </button>
              </h3>
              <div className="pt-6" id="filter-section-2">
                <div className="">
                  {
                    props.filterData.year && props.filterData.year.length > 0 &&
                    props.filterData.year.map((year, id) => (
                      <div className="flex items-center" key={id}>
                        <input id={year.year} name="year" value={year.year} checked={props.yearFilter == year.year ? "checked" : ''}  onChange={ handleYearClick} type="radio" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor={year.year} className="ml-3 text-sm text-gray-600">{year.year} ({year.id})</label>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
        </div>
};

export default ProductFilter;