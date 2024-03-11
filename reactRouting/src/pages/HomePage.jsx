import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Link on <Link to="/product">product page</Link>
      </p>
    </>
  );
}
