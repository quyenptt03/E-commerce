import { useParams, useLocation } from 'react-router-dom';
import CardCategory from '../../../components/card/CardCategory';
import New from '../../../components/new/New';
import Datatable from "../../../components/datatable/Datatable"
import {productsColumns, productsRows} from "../../../datatablesource.js"
import Update from '../../../components/update/Update.jsx';
function CategoryDetail() {
    const categoriesInputs = [
        {
          id: 1,
          label: "Name Category",
          type: "text",
          name:"name",
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
    <div className='bottomCategory'>
        <Datatable nameTable="Product list of "columns={productsColumns} dataSource={productsRows}type="admin" dialog={false} url="shops" />
    </div>
    <Update inputs={categoriesInputs} title="Update Category" userType="category" id={category.id} />
    </>
    
  );
}

export default CategoryDetail;
