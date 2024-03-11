import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../store";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.showCartHandler());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
