import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../interfaces/project";


import { projectAdd, projectDelete, projectFetch, projectUpdate } from "../thunks";

// First, create the thunk
export const fetchAllProjects = projectFetch("projects");
export const updateAProject = projectUpdate("projects");
export const addAProject = projectAdd("projects");
export const deleteAProject = projectDelete("projects");


export interface ProjectState {
  all: Project[];
  loading: boolean;
  searched: Project[] | null;
  searchText: string;
}

const initialState: ProjectState = {
  all: [],
  searched: null,
  loading: true,
  searchText: '',

};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    search: (state,action)=>{

      state.loading = true
      state.searched = state.all.filter(project =>
         project.name.toLocaleLowerCase().includes(action.payload))
         state.loading = false
    },
    addSearchText: (state,action)=>{
      state.searchText = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProjects.fulfilled, (state, action) => {
      state.all = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addAProject.fulfilled, (state, action) => {
      state.all.push(action.payload);
    });

    builder.addCase(
      updateAProject.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.all = state.all.map((project) => {
          if (project.id === action.payload.id) {
            return action.payload;
          }
          return project;
        });
      }
    );

    builder.addCase(
      deleteAProject.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.all = state.all.filter(
          (project) => project.id !== action.payload.id
        );
      }
    );

  },
});
export const {search,addSearchText} = projectSlice.actions;
export default projectSlice.reducer;
