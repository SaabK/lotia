import { products } from "../data";
import fiveStars from "../assets/stars.png";

function Products() {
  return (
    <section id="products">
      <div className="container">
        <h2 className="text-center">
          What kinds of products can you sell with Podia?
        </h2>
        <p className="text-center w-less">
          Podia gives you the flexibility to sell whatever you want. That means
          you have more ways to grow your creator business.
        </p>
        <ul role="list" className="products">
          {products.map((product, index) => (
            <li key={index} className="product">
              <div className="product-info">
                <div className="text-content">
                  <h5>{product.name}</h5>
                  <h3>{product.heading}</h3>
                  <p>{product.description}</p>
                  <button className="btn btn-cta">
                    {product.cta} <span>→</span>
                  </button>
                </div>

                <img src={product.image} alt="" />
              </div>
              {product.review === null ? (
                ""
              ) : (
                <div className="review">
                  <img src={fiveStars} alt="" />
                  <p className="text-center">{product.review?.text}</p>
                  <span>— {product.review.author}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Products;
