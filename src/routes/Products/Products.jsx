import "./Products.css";
import { productItems } from "../../utils/productItems";

const Products = () => {
  const productGroup = (
    <>
      {productItems.map((product) => (
        <div
          key={product.id}
          className="product-container-items-card"
          onClick={() => console.log(product.name)}
        >
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </>
  );

  return (
    <div className="product-container">
      <div className="product-header">
        <h1>Products</h1>
      </div>
      <div className="product-container-items">{productGroup}</div>
    </div>
  );
};

export default Products;
