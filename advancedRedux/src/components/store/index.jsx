import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    showCart: true,
    notification: null,
    change: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemHandler(state, action) {
      const newItem = action.payload;
      if (!state.items) {
        state = { items: [] };
      }
      const existingItem = state.items.find((el) => el.id === newItem.id);
      state.change = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemHandler(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((el) => el.id === id);
      state.change = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((el) => el.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    showCartHandler(state) {
      state.showCart = !state.showCart;
    },
    notificationHandler(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

//! send data

export const sendingData = (data) => {
  return async (dispatch) => {
    dispatch(
      cartActions.notificationHandler({
        status: "pending",
        title: "Sending...",
        message: "Please wait sending data...",
      })
    );

    const sendData = async () => {
      const response = await fetch(
        "https://shop-df80d-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: data.items,
            totalQuantity: data.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
    };

    try {
      await sendData();
      dispatch(
        cartActions.notificationHandler({
          status: "success",
          title: "Success",
          message: "Sending data success!",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.notificationHandler({
          status: "error",
          title: "Error",
          message: "Failed sending data!",
        })
      );
    }
  };
};

//! fetch data

export const fetchingData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://shop-df80d-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Failed fetching data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        cartActions.notificationHandler({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
