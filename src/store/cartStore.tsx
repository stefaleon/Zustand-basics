import { create } from "zustand";
import { Product } from "../components/productList";

type CartState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product: Product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeItem: (id: string) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));