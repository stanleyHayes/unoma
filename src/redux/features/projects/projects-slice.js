import {createSlice} from "@reduxjs/toolkit";
import {projects} from "./projects";

const projectSlice = createSlice({
    name: "project",
    initialState: {
        projects: [...projects],
        projectLoading: false,
        projectError: null
    },
    reducers: {}
});

const {reducer} = projectSlice;
export const selectProjects = state => state.projects;

export default reducer;