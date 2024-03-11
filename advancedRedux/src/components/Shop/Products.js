import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "r1",
    title: "Book",
    description: "This is a first product - amazing!",
    price: 12.99,
  },
  {
    id: "r2",
    title: "Pen",
    description: "This is a second product - amazing!",
    price: 5.99,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((el) => (
          <ProductItem
            key={el.id}
            id={el.id}
            title={el.title}
            price={el.price}
            description={el.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
