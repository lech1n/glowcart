  import data from '../../data.js'
  import { useOutletContext } from 'react-router-dom'
  import Pagination from './Pagination.jsx'
  import noProd from "../../assets/no-prod.jpg"
  import '../../components/productsPageProd/ProductsPageProd.css'

  const Cleanser = () => {
  	const [filteredData] = useOutletContext()

    const filteredProducts = filteredData.filter((item) => item.category === "cleanser")
    
    return (
      <>   
      { filteredProducts.length  === 0 &&
      (<div className="no_prod_found_container">
        <p>No products found.</p>
        <img src={noProd} alt="no products found" />
        </div>
        )}
      <div className="category-name_container">
      <p>Cleansers</p>
      </div>
      {filteredProducts.length > 0 && (
        <Pagination data={filteredProducts}/>
        )}
      
      </>
      )
  }

  export default Cleanser
