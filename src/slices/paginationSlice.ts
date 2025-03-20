import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPaginatedProducts = createAsyncThunk(
    'pagination/fetchPaginatedProducts',
    async ({ page, perPage, category }: { page: number, perPage?: number, category: string }, { dispatch, getState }) => {
        const effectivePerPage = perPage || 4;
        const response = await fetch(`https://api-prova-frontend.solucoeslifeapps.com.br/products?_page=${page}&_per_page=${effectivePerPage}&category=${category}`);
        const data = await response.json();
        return {
            products: data.data,
            prevPage: data.prev,
            nextPage: data.next,
            lastPage: data.last
        };
    }
);

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        products: [],
        selectedValue: "",
        prevPage: null,
        nextPage: 2,
        lastPage: 2,
        currentPage: 1,
        itemsPerPage: 4,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSelectedValue: (state, action) => {
            state.selectedValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPaginatedProducts.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.prevPage = action.payload.prevPage;
            state.nextPage = action.payload.nextPage;
            state.lastPage = action.payload.lastPage;
            state.currentPage = action.payload.prevPage !== null ? action.payload.prevPage + 1 : 1;
        });
    }
});

export const { setCurrentPage, setSelectedValue } = paginationSlice.actions;

export default paginationSlice.reducer;