
import axios from 'axios';

export const getProduct = (config) => {  
  return axios.get('http://localhost/phpreact/products.php',config);
}
