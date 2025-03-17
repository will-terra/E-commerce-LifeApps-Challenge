import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/types/Product';
import { CartItem } from '@/types/Cart'

export interface CartState {
    items: CartItem[]

}

const initialState: CartState = {
    items: []
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
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer