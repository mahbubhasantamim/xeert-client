import { create } from "zustand";

type CartItem = {
  size: string;
  quantity: number;
  _id: string;
  productName: string;
  productImg: string;
  productPrice: number;
  discountPrice: number;
  discount: number;
  stock: number;
  productDesc: string;
};

type CartStore = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  incQuantity: (item: CartItem) => void;
  decQuantity: (item: CartItem) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),

  incQuantity: (item) =>
    set((state) => {
      const updatedCart = state.cartItems.map((cartItem) =>
        cartItem._id === item._id && cartItem.size === item.size
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return { cartItems: updatedCart };
    }),

  decQuantity: (item) =>
    set((state) => {
      const updatedCart = state.cartItems.map((cartItem) =>
        cartItem._id === item._id && cartItem.size === item.size
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return { cartItems: updatedCart };
    }),

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id && cartItem.size === item.size
      );

      if (existingItem) {
        // Update quantity if the item already exists in the cart
        const updatedCart = state.cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return { cartItems: updatedCart };
      } else {
        // Add a new item to the cart if it doesn't exist
        const updatedCart = [...state.cartItems, { ...item }];
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return { cartItems: updatedCart };
      }
    }),

  removeFromCart: (item) =>
    set((state) => {
      const updatedCart = state.cartItems.filter(
        (cartItem) => cartItem._id !== item._id || cartItem.size !== item.size
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return { cartItems: updatedCart };
    }),
}));
