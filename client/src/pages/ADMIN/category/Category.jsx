import './category.scss';
import CardCategory from '../../../components/card/CardCategory';
import { categories } from '../../../datatablesource';

const Category = () => {
  return (
    <div className='listCategory'>
      {categories.map(item => (
        <CardCategory key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Category;
