import Datatable from "../../../components/datatable/Datatable"
import {productsColumns, productsRows} from "../../../datatablesource.js"
function Product() {
    
  return (
    <>
        <Datatable nameTable="All Product List"columns={productsColumns} dataSource={productsRows} dialog={false} url="products" />
       
    </>
    
  );
}

export default Product;

  