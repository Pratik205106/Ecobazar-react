import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../../types/types';

const calculateTotals = (items: CartItem[]) => ({
  totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
  totalPrice: items.reduce((sum, item) => sum + item.quantity * item.price, 0),
});

type CartStore = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addToCart: (product) => {
        if (!product.price || product.price <= 0) {
          console.warn('Invalid product price. Cannot add to cart.');
          return;
        }

        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);

        let updatedItems;
        if (existingItem) {
          updatedItems = items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedItems = [...items, { ...product, quantity: 1 }];
        }

        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        set({ items: updatedItems, totalItems, totalPrice });
      },

      updateQuantity: (id, delta) => {
        const { items } = get();
        const updatedItems = items
          .map(item => {
            if (item.id === id) {
              const newQuantity = item.quantity + delta;
              return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
            }
            return item;
          })
          .filter((item): item is CartItem => item !== null);

        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        set({ items: updatedItems, totalItems, totalPrice });
      },

      removeItem: (id) => {
        const updatedItems = get().items.filter(item => item.id !== id);
        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        set({ items: updatedItems, totalItems, totalPrice });
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
