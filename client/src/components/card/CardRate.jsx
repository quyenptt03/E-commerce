import React from 'react';
import "./card.scss"
function CardRate({ avatar, name, rate, productId, reviewTitle, reviewDate, reviewText,images  }) {
  return (
    <div className="reviewCard">
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="reviewContent">
        <h3 className="reviewerName">{name}</h3>
        <div className="reviewContainer">
            <div className="rating">
                {'★'.repeat(rate)}{'☆'.repeat(5 - rate)} {/* Hiển thị số sao */}
            </div>
            <p className="reviewTitle">{reviewTitle}</p>
        </div>
        <p className="reviewDate">{reviewDate}</p>
        <p className="reviewText">{reviewText}</p>
        <div className="reviewImages">
          {images && images.length > 0 && images.map((image, index) => (
            <img key={index} src={image} alt={`review-${index}`} className="reviewImage" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardRate;
