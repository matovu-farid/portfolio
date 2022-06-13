import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
const toastMessege = (context:string)=>{
   const lowercased= context.toLowerCase()
  return {
    pending: `${context} loading...⏳`,
    error: `${context} failed 🤯`,
    success: `Project ${lowercased} successful 😊`

  }
}
export const updateAProject = createAsyncThunk(
  "projects/update",
  async (project: any) => {
     await toast.promise(updateProject(project),toastMessege('Update'))
   
   
    return project;
  }
);
export const addAProject = createAsyncThunk(
  "projects/add",
  async (project: Project) => {
    
    await toast.promise(addProject(project),toastMessege('Add'));
    return project;
  }
);
export const deleteAProject = createAsyncThunk(
  "projects/delete",
  async (project: Project) => {
    await toast.promise(deleteProject(project),toastMessege('Delete'));
    return project;
  }
);
export interface ProjectState {
  all: Project[];
  loading: boolean;
}

const initialState: ProjectState = {
  all: [],
  loading: true
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProjects.fulfilled, (state, action) => {
      state.all = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllProjects.pending, (state, action) => {
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

export default projectSlice.reducer;
