import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <>
          <nav className="flex items-center justify-between flex-wrap bg-gray-100	 p-6 mb-5">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
              <Link to={`/buy-used-cars/`}><span className="font-bold text-xl tracking-tight">Used Card Listing</span></Link>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-lg lg:flex-grow">
                <Link to={`/buy-used-cars/`}>Buy Cars</Link>
              </div>
              <div>
                  Call us at : 484-964-564
              </div>
            </div>
          </nav>
        </>
};

export default NavBar;