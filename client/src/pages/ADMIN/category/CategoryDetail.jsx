import { useParams, useLocation } from 'react-router-dom';
import CardCategory from '../../../components/card/CardCategory';
import New from '../../../components/new/New';
import Datatable from "../../../components/datatable/Datatable"
import {productsColumns, productsRows} from "../../../datatablesource.js"
function CategoryDetail() {
    const categoriesInputs = [
        {
          id: 1,
          label: "Name Category",
          type: "text",
          placeholder: "clothing/phone/babytee",
        },]
  const { categoryId } = useParams();
  const location = useLocation();
  const category = location.state?.category;
  if (!category) {
    return <p>No category found</p>;
  }

  return (
    <>
    <div className='listCategoryDetail'>
        <div className='left'> <CardCategory key={category.id} item={category} /></div>

        <div className='right'><New inputs={categoriesInputs} title="Add Category" userType="category"/></div>
        
    </div>
    <div className='bottom'>
        <Datatable nameTable="Product list of "columns={productsColumns} dataSource={productsRows} dialog={false} url="shops" />

    </div>
    </>
    
  );
}

export default CategoryDetail;
