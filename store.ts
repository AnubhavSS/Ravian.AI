import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartState {
  cart: Array<any>;
  addToCart: (product: any) => void;
  removeFromCart: (product: any) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product) =>
          set((state) => ({ cart: [...state.cart, product] })),
        removeFromCart:(product)=>{
            const productToRemove=get().cart.findIndex((p)=>p.title===product.title);
            set((state)=>{
                const newCart=[...state.cart];
                newCart.splice(productToRemove,1);
                return {cart:newCart}
            })
        }
      }),
      { name: "shopping-cart-storage" }
    )
  )
);
