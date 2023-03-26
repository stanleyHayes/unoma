import {createSlice} from "@reduxjs/toolkit";
import {articles} from "./articles";

const articleSlice = createSlice({
    name: "article",
    initialState: {
        articles: [...articles],
        articleLoading: false,
        articleError: null
    },
    reducers: {}
});

const {reducer} = articleSlice;
export const selectArticles = state => state.articles;

export default reducer;