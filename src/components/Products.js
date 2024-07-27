import React, { useEffect, useState } from "react";
import ProductCard from './ProductCards';
import ProductFilter from './ProductFilter';
import Pagination from "./Pagination";
import FilterHeader from './FilterHeader';
import { getProduct } from '../api/api';


const Products = () => {
  const [products, setProduct] = useState({});
  const [productFilter, setProductFilter] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [total, setTotal] = useState(0);
  const per_page = (products && typeof products.data != 'undefined') ? products.meta.per_page : '8';
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  const [postsPerPage] = useState(per_page);
  const [globalFilter, setGlobalFilter] = useState([]);
  const [yearFilter, setYearFilter] = useState('');
  const [milageFilter, setMilageFilter] = useState('');

  var config = {
    params:{
      page:currentPage,
      limit:per_page,
    },
  };
  useEffect(() => {
    getProduct(config).then(response => response.data)
      .then(response => { 
        setProduct(response.data);
        setTotal(response.meta.total);
        setProductFilter(response.meta.filter_data);
      })
      .catch(error => {
      setErrorMessages({ name: "pass", message: "Something went wrong.Please try again later."});
    });
  }, []);

 const get_product = (config) => {
    getProduct(config).then(response => response.data)
    .then(response => { 
      setProduct(response.data);
      setTotal(response.meta.total);
      setProductFilter(response.meta.filter_data);
    })
    .catch(error => {
    if (error.response.status === 401) setErrorMessages({ name: "pass", message: error.response.data.message});
    else setErrorMessages({ name: "pass", message: "Something went wrong.Please try again later."});
  });
 }
 const handleYearClick = (value,accessor) => {
    setYearFilter(value);
    var config = {
      params:{
        page:currentPage,
        limit:per_page,
        search:globalFilter,
        max_milage:milageFilter,
        min_year:value,
      }
    };
    get_product(config);
 }
 const handleMilageClick = (value,accessor) => {
  setMilageFilter(value);
  var config = {
      params:{
        page:currentPage,
        limit:per_page,
        search:globalFilter,
        max_milage:value,
        min_year:yearFilter,
      }
  };
  get_product(config);
 }
 const handleFilterClick = ( value,accessor, brand_id ) => {
  let insertNewFilter = 1;

  if (globalFilter.length) {
    globalFilter.forEach((filter, i) => {
      if (filter["id"] === accessor && filter['value'] === value) {
        globalFilter.splice(i, 1);
        insertNewFilter = 0;
      }
    });
  }
  if (insertNewFilter) {
    globalFilter.push({ id: accessor, value: value, brand_id:brand_id });
  }
  setGlobalFilter(globalFilter);
  var config = {
      params:{
        page:currentPage,
        limit:per_page,
        search:globalFilter,
        max_milage:milageFilter,
        min_year:yearFilter,
      }
  };
  get_product(config);
};
const handleClearAllClick = () => {
  setGlobalFilter([]);
  setMilageFilter('');
  setYearFilter('');
  var config = {
    params:{
      page:0,
      limit:per_page,
      search:'',
      max_milage:'',
      min_year:'',
    }
  };
  get_product(config);
}
 const handlePageClick = ( event ) => {
    
  setCurrentPage(event.selected + 1);
   var config = {
      params:{
        page:event.selected + 1,
        limit:per_page,
        search:globalFilter,
        max_milage:milageFilter,
        min_year:yearFilter,
      }
  };
  get_product(config);
};
  return <div className="posts-container">
        
          <div className="flex flex-col h-screen">
            <div className="flex flex-1">
              <div className="flex w-64 p-4"> 
                <ProductFilter filterData={productFilter} handleMilageClick={handleMilageClick} globalFilter={globalFilter} yearFilter={yearFilter} milageFilter={milageFilter} handleYearClick={handleYearClick} handleFilterClick={handleFilterClick}/>
              </div>
              <div className="flex flex-1 flex-col">
                <FilterHeader globalFilter={globalFilter} handleClearAll={handleClearAllClick} yearFilter={yearFilter} milageFilter={milageFilter}/>  
                <div className="flex bg-white-300 h-16 py-4">{total} Cars </div>
                
                <div className="flex bg-white-300 overflow-y-auto paragraph grid grid-cols-4 gap-4">
                  {
                    products.length > 0 &&
                    products.map((product, id) => (
                        <ProductCard product={product} key={id}/>
                    ))
                  }
                 </div>
                 <Pagination total={total} handlePageClick={handlePageClick} postsPerPage={postsPerPage} />
              </div>
            </div>
          </div>
        </div>;
};

export default Products;