import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/types/Product';
import { CartItem } from '@/types/Cart'

export interface CartState {
    items: CartItem[],
    total: number,
    totalQuantity?: number
}

const initialState: CartState = {
    items: [],
    total: 0
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const existingItem = state.items.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;

            } else {
                state.items.push({ ...product, quantity: 1 });
            }

        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload.id;
            const existingItem = state.items.find((item) => item.id === product);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter((item) => item.id !== product);
                }
            }
        },
        removeAllFromCart: (state) => {
            state.items = [];
        },
        cartTotal: (state) => {
            state.total = state.items.reduce((acc, item) => {
                const price = item.promotional_price ?? item.price;
                return acc + price * (item.quantity || 1);
            }, 0);
        },
        cartQuantity: (state) => {
            state.totalQuantity = state.items.reduce((acc, item) => {
                return acc + (item.quantity || 1);
            }, 0);
        }

    }
})

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions

export default cartSlice.reducer