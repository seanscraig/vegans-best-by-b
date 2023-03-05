import "./Products.css";
import productImg0 from "../../assets/AvocadoChocolateMousse.jpg";
import productImg1 from "../../assets/FB_IMG_1659994072491.jpg";
import productImg2 from "../../assets/IMG_20230126_174342.jpg";
import productImg3 from "../../assets/IMG_20230128_122529.jpg";
import productImg4 from "../../assets/IMG_20221028_112116__01.jpg";
import productImg5 from "../../assets/IMG_20230210_123046.jpg";

const productItems = [
  {
    id: 0,
    img: productImg0,
    name: "Avocado Chocolate Mousse",
    description:
      "This is where we would put a description of the product/recipe",
  },
  {
    id: 1,
    img: productImg1,
    name: "Tacos",
    description:
      "This is where we would put a description of the product/recipe",
  },
  {
    id: 2,
    img: productImg2,
    name: "Name",
    description:
      "This is where we would put a description of the product/recipe",
  },
  {
    id: 3,
    img: productImg3,
    name: "Name",
    description:
      "This is where we would put a description of the product/recipe",
  },
  {
    id: 4,
    img: productImg4,
    name: "Name",
    description:
      "This is where we would put a description of the product/recipe",
  },
  {
    id: 5,
    img: productImg5,
    name: "Name",
    description:
      "This is where we would put a description of the product/recipe",
  },
];

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
