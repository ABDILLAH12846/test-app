// src/redux/productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface ProductState {
  products: Product[];
  cart: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  cart: [],
  loading: false,
  error: null,
};

// ✅ Async thunk untuk fetch data produk
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // ✅ Tambahkan ke keranjang
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // ✅ Kurangi item dari keranjang
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
    // ✅ Opsional: hapus langsung item
    removeItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// ✅ Export actions dan reducer
export const { addToCart, removeFromCart, removeItem } = productSlice.actions;
export default productSlice.reducer;
