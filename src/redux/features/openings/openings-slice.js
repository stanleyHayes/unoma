import {createSlice} from "@reduxjs/toolkit";
import {openings} from "./openings";

const openingSlice = createSlice({
    name: "opening",
    initialState: {
        openings: [...openings],
        openingLoading: false,
        openingError: null
    },
    reducers: {}
});

const {reducer} = openingSlice;
export const selectOpenings = state => state.openings;

export default reducer;