import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.imageUrl[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
        <p >{item.name}</p>
          <Link to={`/${item.id}`}>{item.linkUrl}</Link>
        </h2>
        <p className="address">
          <span>{item.content}</span>
        </p>
        <p className="price">{item.discountPercentage > 0 ? `${item.discountPercentage}% Off` : 'No Discount'} </p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <span>{item.type}</span>
            </div>
            <div className="feature">
                <span>
                  {item.status ? '✔️' : '❌'}
                </span>
            </div>
          </div>
          <div className="icons">
            <span>Bắt đầu: <p>{item.startDate.toDateString()}</p></span>
            <span>Kết thúc: <p>{item.endDate.toDateString()}</p></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;