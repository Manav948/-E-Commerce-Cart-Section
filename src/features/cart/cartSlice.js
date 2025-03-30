import { createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
    const storeCart = localStorage.getItem('cart');
    return storeCart ? JSON.parse(storeCart) : [];
}

const initialState = {
    cartItem: loadCart(),
    totalAmount: 0,
    totalQuantity: 0
}

const Slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItem.find((product) => product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
            else {
                state.cartItem.push({ ...action.payload, quantity: 1 })
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItem))
        },

        removeFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter((product) => product.id != action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cartItem))
        },
        updateQuantity: (state, action) => {
            const item = state.cartItem.find((product) => product.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },

        calculateTotals: (state) => {
            let total = 0;
            let quantity = 0;
            state.cartItem.forEach((item) => {
                if (!item.price || !item.quantity) return; 
                total += item.price * item.quantity;
                quantity += item.quantity;
            });
            state.totalAmount = total;
            state.totalQuantity = quantity;
        }
        
    }
})

export const { addToCart, removeFromCart, updateQuantity, calculateTotals } = Slice.actions;
export default Slice.reducer;