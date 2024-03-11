import { Link, useNavigate } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "r1", title: "Product 1" },
  { id: "r2", title: "Product 2" },
  { id: "r3", title: "Product 3" },
];

export default function Product() {
  const navigation = useNavigate();

  const navHandler = () => {
    navigation("/");
  };

  return (
    <>
      <h1>The product page</h1>
      <p>
        <button onClick={navHandler}>Navigation</button>
      </p>
      <hr />
      <ul>
        {DUMMY_PRODUCTS.map((el) => (
          <li key={el.id}>
            <Link to={`/product/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
