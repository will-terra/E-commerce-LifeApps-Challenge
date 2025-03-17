import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/types/Product';
import { CartItem } from '@/types/Cart'

// Define the TS type for the counter slice's state
export interface CartState {
    items: CartItem[]

}

// Define the initial value for the slice state
const initialState: CartState = {
    items: []
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
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

// Export the generated action creators for use in components
export const { addToCart } = cartSlice.actions

// Export the slice reducer for use in the store configuration
export default cartSlice.reducer