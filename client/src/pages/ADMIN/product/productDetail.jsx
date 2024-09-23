import React from 'react';
import { useLocation } from 'react-router-dom';
import CardProduct from "../../../components/card/CardProduct.jsx";
import { productsRows } from '../../../datatablesource.js';
import { productInputs } from '../../../formSource.js';
import CardRate from '../../../components/card/CardRate.jsx';
import Update from '../../../components/update/Update.jsx';
import "./product.css";
import { useState } from "react";
function ProductDetail() {
  const [activeTab, setActiveTab] = useState('details');

  const location = useLocation();
  const { id } = location.state || {};
  const productInfo = productsRows.find((product) => product.id === id);
  const filteredReviews = reviews.filter((review) => review.productId === id);

  if (!productInfo) {
    return <div className="shopDetailContainer">Product not found</div>;
  }


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='tabs'>
        <button className={`tab ${activeTab === 'details' ? 'active' : ''}`} onClick={() => handleTabChange('details')}>
          Product Details
        </button>
        <button className={`tab ${activeTab === 'update' ? 'active' : ''}`} onClick={() => handleTabChange('update')}>
          Update Product
        </button>
      </div>
      
      <div className='listProductsDetail'>
        {activeTab === 'details' && (
          <>
            <p className='titleProductDetail'>Product Detail</p>
            <div className='left'>  
              <CardProduct key={productInfo.id} item={productInfo} />
            </div>
            <div className='rate'>
              <div className="RateLeft">
                {/* Additional content can be added here if needed */}
              </div>
              <div className="RateRight">
                <p className='titleRateRight'>Rate of Product</p>
                <hr />
                {filteredReviews.length > 0 ? (
                  filteredReviews.map((review) => (
                    <CardRate
                      key={review.id}
                      avatar={review.avatar}
                      name={review.name}
                      rate={review.rate}
                      reviewTitle={review.reviewTitle}
                      reviewDate={review.reviewDate}
                      reviewText={review.reviewText}
                      images={review.images}
                    />
                  ))
                ) : (
                  <p className="noti">No reviews available for this product.</p>
                )}
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'update' && (
          <Update inputs={productInputs} title="Update Product" userType="product" id={productInfo.id} />
        )}
      </div>
    </>
  );
}

export default ProductDetail;

const reviews = [
  {
    id: 1,
    productId: 1,
    avatar: 'https://i.ebayimg.com/images/g/E2sAAOSwC9dlmhoo/s-l960.webp',
    name: 'Henny K. Mark',
    rate: 5,
    reviewTitle: 'Excellent Quality',
    reviewDate: 'Reviewed in Canada on 16 November 2023',
    reviewText: 'Medium thickness. Did not shrink after wash. Good elasticity. XL size perfectly fit for 5.10 height and heavy body. Did not fade after wash. Only for maroon colour t-shirt colour lightly gone in first wash but not faded. I bought 5 t-shirts of different colours. Highly recommended in so low price.',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ]
  },
  {
    id: 2,
    productId: 1,
    avatar: 'https://i.ebayimg.com/images/g/E2sAAOSwC9dlmhoo/s-l960.webp',
    name: 'John Doe',
    rate: 4,
    reviewTitle: 'Good Quality',
    reviewDate: 'Reviewed in USA on 10 September 2023',
    reviewText: 'The material is soft and comfortable. A bit larger than expected but still a great product overall. Highly recommend!',
    images: [
      'https://via.placeholder.com/150'
    ]
  },
  {
    id: 3,
    productId: 2,
    avatar: 'https://i.ebayimg.com/images/g/E2sAAOSwC9dlmhoo/s-l960.webp',
    name: 'Jane Smith',
    rate: 3,
    reviewTitle: 'Decent Product',
    reviewDate: 'Reviewed in UK on 5 August 2023',
    reviewText: 'The quality is okay for the price. It fits well, but the color faded a bit after the first wash. Would recommend for casual use.',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ]
  }
];
