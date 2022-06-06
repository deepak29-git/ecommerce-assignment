
import {  useAxios } from "../../GetData"
import { getBrand } from "../../Utility/getbrand";
import { getCategory } from "../../Utility/getCategory";
import { getClear } from "../../Utility/getClear";
import { getSize } from "../../Utility/getSize";
import { getSortByPrice } from "../../Utility/getSortByPrice";
import { useFilter } from "../context/filter-context";
import '../Products/Products.css'
export const Products=()=>{
  const {products,loading}=useAxios();
  const {state}=useFilter();
  const {category,sorting,brand,size,clearAll}=state;

  const sortByPrice=getSortByPrice(products,sorting)
  const filterByCategory=getCategory(sortByPrice,category)
  const filterByBrand=getBrand(filterByCategory,brand)
  const filterBySize=getSize(filterByBrand,size)
  const clearFilter=getClear(filterBySize,clearAll)
    return(
        <div className="products-container">
            
            {loading?<h3>...loading</h3>:clearFilter.map(({id,title,brand,image,price,size})=>(
                <div key={id}>
                   <img className="product-image" src={image} alt={title} />
                   <div className="product-content">
                       <div className="space-between gap">
                   <h3>{brand}</h3>
                   <h5>{size}</h5>
                       </div>
                   <p>{title}</p>
                   <h3>₹{price}</h3>
                   </div>
                </div>
            ))}
        </div>
    )
}