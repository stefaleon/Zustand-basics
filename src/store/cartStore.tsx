import { create } from "zustand";
import { Product } from "../components/productList";
import { createSelectors } from "./create-selectors";

type CartState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product: Product) =>
    set((state) => {
      if (!state.cart.some((p) => p.id === product.id)) {
        return { cart: [...state.cart, product] };
      }
      return state;
    }),
  removeItem: (id: string) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));

export const useCartStoreSelectors = createSelectors(useCartStore);
