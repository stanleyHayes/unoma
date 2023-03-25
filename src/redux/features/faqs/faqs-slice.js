import {createSlice} from "@reduxjs/toolkit";

const faqSlice = createSlice({
    name: "faq",
    initialState: {
        faqs: [],
        faqLoading: false,
        faqError: null
    },
    reducers: {}
});

const {reducer} = faqSlice;
export const selectFAQs = state => state.faq;

export default reducer;