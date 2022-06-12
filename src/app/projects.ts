import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../interfaces/project";
import {
  addProject,
  deleteProject,
  fetchAll,
  updateProject,
} from "./project_functions";

// First, create the thunk
export const fetchAllProjects = createAsyncThunk("projects/fetch", async () => {
  const projects = await fetchAll();
  return projects;
});
export const updateAProject = createAsyncThunk(
  "projects/update",
  async (project: any) => {
    await updateProject(project);
    return project;
  }
);
export const addAProject = createAsyncThunk(
  "projects/add",
  async (project: Project) => {
    await addProject(project);
    return project;
  }
);
export const deleteAProject = createAsyncThunk(
  "projects/delete",
  async (project: Project) => {
    await deleteProject(project);
    return project;
  }
);
export interface ProjectState {
  all: Project[];
}

const initialState: ProjectState = {
  all: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProjects.fulfilled, (state, action) => {
      state.all = action.payload;
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
          (project) => project.id === action.payload.id
        );
      }
    );
  },
});

export default projectSlice.reducer;
