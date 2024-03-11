import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { fetchingData, sendingData } from "./components/store";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.items);
  const notification = useSelector((state) => state.notification);
  const change = useSelector((state) => state.change);

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    if (change) {
      dispatch(sendingData(cart));
    }
  }, [cart, dispatch, change]);

  console.log(cart);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
