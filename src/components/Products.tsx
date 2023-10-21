import { products } from "../data";
import fiveStars from "../assets/stars.png";

function Products() {
  return (
    <section id="products" className="container">
      <h2>What kinds of products can you sell with Podia?</h2>
      <p>
        Podia gives you the flexibility to sell whatever you want. That means
        you have more ways to grow your creator business.
      </p>
      <ul role="list">
        {products.map((product, index) => (
          <li key={index} className="product">
            <div>
              <div className="text-content">
                <h4>{product.name}</h4>
                <h3>{product.heading}</h3>
                <p>{product.description}</p>
                <button className="btn btn-cta">{product.cta} →</button>
              </div>

              <img src={product.image} alt="" />
            </div>
            {product.review === null ? (
              ""
            ) : (
              <div className="review">
                <img src={fiveStars} alt="" />
                <p>{product.review?.text}</p>
                <span>— {product.review.author}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
