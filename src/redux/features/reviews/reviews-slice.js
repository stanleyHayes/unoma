import {createSlice} from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        reviews: [],
        reviewLoading: false,
        reviewError: null
    },
    reducers: {}
});

const {reducer} = reviewSlice;
export const selectReviews = state => state.review;

export default reducer;