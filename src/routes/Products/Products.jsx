import "./Products.css";
import {productItems} from "../../utils/productItems"

const Products = () => {
  return (
    <div className="product-container">
      <div className="product-header">
        <h1>Products</h1>
      </div>
      <div
        className="product-container-items"
        onClick={() => console.log("click")}
      >
        {productItems.map((product) => (
          <div key={product.id} className="product-container-items-card">
            <img src={product.img} alt={product.header} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
