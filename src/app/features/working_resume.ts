import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Resume } from "../../interfaces/resume";


export interface WorkingResumeState {
  name: string;
  description: string;
  image: string;
  github: string;
}

const initialState: WorkingResumeState = {
  name : '',
  description: '',
  image: '',
  github: '',
};

export const workingResumeSlice = createSlice({
  name: "working resume",
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
    setWorkingResume: (state,action : PayloadAction<Resume>)=>{
      const resume = action.payload
      state.image = resume.image
      state.description = resume.description
      state.github = resume.github
      state.name = resume.name
    },
    resetWorkingResume: (state)=>{
      state.image = ''
      state.name = ''
      state.description = ''
      state.github = ''
    },
  },
  
});
export const {addName ,setWorkingResume, addDescription, addGithub, addImage, resetWorkingResume} = workingResumeSlice.actions

export default workingResumeSlice.reducer;
