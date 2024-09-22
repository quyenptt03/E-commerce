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


const products = [
    {
      id: 1,
      name: "Product 1",
      images: [
        "https://i.ebayimg.com/images/g/oOEAAOSwrp5l0KX1/s-l960.webp",
        "https://i.ebayimg.com/images/g/tBsAAOSwZWdl0KX1/s-l960.webp",
        "https://i.ebayimg.com/images/g/LzsAAOSwZCJl0KX1/s-l960.webp",
         "https://i.ebayimg.com/images/g/IpcAAOSwbqRl0KX1/s-l960.webp",
        "https://i.ebayimg.com/images/g/oOEAAOSwrp5l0KX1/s-l960.webp"
      ]
    },
    
  ];
  