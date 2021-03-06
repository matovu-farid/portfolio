import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../interfaces/project";


export interface WorkingProjectState {
  name: string;
  description: string;
  image: string;
  github: string;
}

const initialState: WorkingProjectState = {
  name : '',
  description: '',
  image: '',
  github: '',
};

export const workingProjectSlice = createSlice({
  name: "working project",
  initialState,
  reducers: {
    addName: (state,action : PayloadAction<string>)=>{
      state.name = action.payload
    },
    addDescription: (state,action : PayloadAction<string>)=>{
      state.description = action.payload
    },
    addGithub: (state,action : PayloadAction<string>)=>{
      state.github = action.payload
    },
    addImage: (state,action : PayloadAction<string>)=>{
      state.image = action.payload
    },
    setWorkingProject: (state,action : PayloadAction<Project>)=>{
      const project = action.payload
      state.image = project.image
      state.description = project.description
      state.github = project.github
      state.name = project.name
    },
    resetWorkingProject: (state)=>{
      state.image = ''
      state.name = ''
      state.description = ''
      state.github = ''
    },
  },
  
});
export const {addName ,setWorkingProject, addDescription, addGithub, addImage, resetWorkingProject} = workingProjectSlice.actions

export default workingProjectSlice.reducer;
