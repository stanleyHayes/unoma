import {createSlice} from "@reduxjs/toolkit";

const articleSlice = createSlice({
    name: "article",
    initialState: {
        articles: [],
        articleLoading: false,
        articleError: null
    },
    reducers: {}
});

const {reducer} = articleSlice;
export const selectArticles = state => state.article;

export default reducer;