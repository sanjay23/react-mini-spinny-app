import { Link } from "react-router-dom";

const ProductCards = (props) => {
  return <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg">
            <Link to={`/buy-used-cars/${props.product.id}`}>
              <div className="font-bold text-xl mb-2 mt-2.5">{props.product.year} {props.product.brand_name}</div>
              <div>
                <div className="px-1 py-1 flex justify-evenly">
                  <ul className="p-2 mb-1 flex flex-nowrap">
                      <li className="w-auto mx-1">{props.product.max_mileage / 1000}K km</li>
                      <li className="w-auto mx-1">{props.product.fual_type == 1 ? "Petrol" : props.product.fual_type == 2 ? "Diesel": props.product.fual_type == 3 ? "CNG" : "Ev" }</li>
                      <li className="w-auto mx-1">{props.product.transmission}</li>
                  </ul>
                </div>
              </div>
              <div className="font-bold text-xl mb-2 mt-2.5">₹{(props.product.price / 100000).toFixed(2)} Lakhs</div>
            </Link>
        </div>
};

export default ProductCards;