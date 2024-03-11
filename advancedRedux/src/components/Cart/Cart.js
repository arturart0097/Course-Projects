import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.items);
  const showCart = useSelector((state) => state.showCart);

  return (
    <>
      {!showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {items.map((el) => (
              <CartItem
                key={el.id}
                item={{
                  id: el.id,
                  title: el.title,
                  quantity: el.quantity,
                  price: el.price,
                  totalPrice: el.totalPrice,
                }}
              />
            ))}
          </ul>
          {items.length === 0 && <p>Your cart is empty!</p>}
        </Card>
      )}
    </>
  );
};

export default Cart;
