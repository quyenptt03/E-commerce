
import { Link } from 'react-router-dom';
import './card.scss';

function CardRate({  }) {
  return (
            <div class="reviewCard">
                <div class="avatar">
                    <img src="https://i.ebayimg.com/images/g/E2sAAOSwC9dlmhoo/s-l960.webp" alt="Avatar" />
                </div>
                <div class="reviewContent">
                    <h3 class="reviewerName">Henny K. Mark</h3>
                    <div class="rating">★★★★★</div>
                    <p class="productId">Product ID: 12345</p>
                    <p class="reviewTitle">Excellent Quality</p>
                    <p class="reviewDate">Reviewed in Canada on 16 November 2023</p>
                    <p class="reviewText">
                    Medium thickness. Did not shrink after wash. Good elasticity. XL size perfectly fit for 5.10 height and heavy body. Did not fade after wash. Only for maroon colour t-shirt colour lightly gone in first wash but not faded. I bought 5 t-shirts of different colours. Highly recommended in so low price.
                    </p>
                </div>
            </div>
  );
}

export default CardRate;

