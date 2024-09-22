import React, { useState, useEffect } from 'react';
import './card.scss';
import { Link } from 'react-router-dom';
import { Circle } from '@mui/icons-material';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
function CardProduct({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [item.images.length]);

  return (
    <div className="productCategory">
      <div className="left">
        <div className="imageContainer">
          <img src={item.images[currentImageIndex].path} alt=""/>
        </div>
      
        <div className="thumbnailContainer">
          {item.images.map((image, id) => (
            <img
              key={image.id}
              src={image.path}
              alt={`Thumbnail ${id + 1}`}
              className="thumbnail"
              onClick={() => setCurrentImageIndex(id)}
            />
          ))}
        </div>
      </div>

      <div className="right">
  <div className="textContainer">

    <h2 className="title">
      <p>{item.name}</p>
    </h2>

    <div className="rating">
          {[...Array(5)].map((_, index) => (
          <Star key={index} style={{ color: 'gold' }} />
        ))}
        <span className="ratingCount">(50 đánh giá)</span> {/* Số lượng đánh giá */}
      </div>

      <p className="price">$
        {item.price}
      </p>
      <lable>
        Description:
      </lable>
    <p className="description">
      <span>{item.description}</span>
    </p>

    

    <lable>
      Colors:
    </lable>
    <div className="colors">
    {item.colors.map((color, index) => {
          const [colorName, colorCode] = color.split(" ");
          
          return (
            <div key={index} className="colorItem">
              <Circle 
                className="colorCircle" 
                style={{ color: `${colorCode}`, marginRight: '5px' }} 
              />
              <span className="colorName">{colorName}</span>
            </div>
          );
        })}
    </div>

    <div className="infoContainer">
        <div className="infoItem">
          <label>Category:</label>
          <div className="feature">
            <span>{item.category === 1 ? 'Clothing' : 'Other'}</span>
          </div>
        </div>
        <div className="infoItem">
          <label>Inventory:</label>
          <div className="feature">
            <span>{item.inventory}</span>
          </div>
        </div>
  </div>

  </div>
</div>
    </div>
    
  );
}

export default CardProduct;
