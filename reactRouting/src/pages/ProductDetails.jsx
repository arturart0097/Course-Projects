import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/product");
  };

  return (
    <>
      <h1>Product details</h1>
      <p>{params.productId}</p>
      <button onClick={navigateHandler}>Back</button>
    </>
  );
}
