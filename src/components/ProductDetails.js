import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from '../api/api'

const ProductDetails = () => {  
  const { slug } = useParams();
  const [productData, setProductData] = useState([]);

  var config = {
    params:{
      id:slug,
    },
  };
  useEffect(() => {
    const fetchProduct = async () => {
      getProduct(config).then(response => response.data)
        .then(response => { 
          setProductData(response.data);
        })
        .catch(error => {
        console.log(error);
      });
    };
    fetchProduct();
  }, [slug]);
  return <div className="flex bg-white w-full mb-5 shadow-sm rounded-lg">
          {
            productData.length > 0 &&
            productData.map((singleProduct, id) => (
              <div className="flex w-full  justify-between" key={id}>     
                
                <div className="w-7/12 p-2 border ">
                  <div className="text-2xl font-bold">Card Details</div>
                  <div className="bg-contain bg-no-repeat bg-center w-full h-full rounded-lg p-5 grid grid-cols-4">
                    <div className="mt-4 md:text-1xl"><div className="font-bold">Card Name: </div><div>{singleProduct.brand_name}</div></div>
                    <div className="mt-4"><div className="font-bold">Transmission:</div><div> {singleProduct.transmission}</div></div>
                    <div className="mt-4"><div className="font-bold">Price:</div><div>₹{(singleProduct.price / 100000).toFixed(2)} Lakhs</div></div>
                    <div className="mt-4"><div className="font-bold">Make Year:</div><div> {singleProduct.year}</div></div>
                    <div className="mt-4"><div className="font-bold">Km driven:</div><div> {singleProduct.max_mileage / 1000}K km</div></div>
                    <div className="mt-4"><div className="font-bold">Fuel Type:</div><div> {singleProduct.fual_type == 1 ? "Petrol" : singleProduct.fual_type == 2 ? "Diesel": singleProduct.fual_type == 3 ? "CNG" : "Ev" }</div></div>
                    <div className="mt-4"><div className="font-bold">No of seats:</div><div> {singleProduct.no_of_seats}</div></div>
                  </div>
                </div>
                <div className="w-3/12 p-5 border border-gray-200 rounded-lg">
                   
                    <div className="font-bold text-xl mb-2 mt-2.5">{singleProduct.year} {singleProduct.brand_name}</div>
                      <div className="px-1 py-1 flex justify-evenly">
                        <ul className="p-2 mb-1 flex flex-nowrap">
                            <li className="w-auto mx-1">{singleProduct.max_mileage / 1000}K km</li>
                            <li className="w-auto mx-1">{singleProduct.fual_type == 1 ? "Petrol" : singleProduct.fual_type == 2 ? "Diesel": singleProduct.fual_type == 3 ? "CNG" : "Ev" }</li>
                            <li className="w-auto mx-1">{singleProduct.transmission}</li>
                        </ul>
                      </div>
                    <div className="font-bold text-xl mb-2 mt-2.5">₹{(singleProduct.price / 100000).toFixed(2)} Lakhs</div>
                </div>
              </div>
           ))
          }
        </div>
};

export default ProductDetails;