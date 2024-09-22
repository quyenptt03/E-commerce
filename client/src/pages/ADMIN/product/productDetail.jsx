import { useParams, useLocation } from 'react-router-dom';
import CardProduct from "../../../components/card/CardProduct.jsx";
import New from '../../../components/new/New';
import { productsRows } from '../../../datatablesource.js';
import CardRate from '../../../components/card/CardRate.jsx';

function ProductDetail() {
    const location = useLocation();
    const { id } = location.state || {};
    const productInfo = productsRows.find((user) => user.id === id);
    if (!productInfo) {
      return <div className="shopDetailContainer">User not found</div>;
    }
  console.log(productInfo);

  return (
    <>
    <div className='listProductsDetail'>
        <div className='left'>  
        <CardProduct key={productInfo.id} item={productInfo} />
        </div>
        <CardRate/>
        {/* <div className='right'><New inputs={categoriesInputs} title="Add Category" userType="category"/></div> */}
        
    </div>
    
    </>
    
  );
}

export default ProductDetail;
