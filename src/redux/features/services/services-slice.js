import {createSlice} from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name: "service",
    initialState: {
        services: [],
        serviceLoading: false,
        serviceError: null
    },
    reducers: {}
});

const {reducer} = serviceSlice;
export const selectServices = state => state.service;

export default reducer;