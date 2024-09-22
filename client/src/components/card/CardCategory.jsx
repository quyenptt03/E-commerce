import { Link } from 'react-router-dom';
import './card.scss';

function CardCategory({ item }) {
  return (
    <div className="cardCategory">
      <Link
        to={`/categories/${item.id}`}
        state={{ category: item }}
        className="imageContainer"
        style={{ textDecoration: 'none' }} 
      >
        <img src={item.imageUrl[0]} alt={item.name} />
     
      <div className="textContainer">
        <p className="title">{item.name}</p>
      </div>
      </Link>
    </div>
  );
}

export default CardCategory;
