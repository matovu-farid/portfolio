import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Resume } from "../../interfaces/resume";


export interface WorkingResumeState {
  name: string;
  title: string;
  intro: string;
}

const initialState: WorkingResumeState = {
  name : '',
  title: '',
  intro: '',
};

export const workingResumeSlice = createSlice({
  name: "working resume",
  initialState,
  reducers: {
    addName: (state,action : PayloadAction<string>)=>{
      state.name = action.payload
    },
    addTitle: (state,action : PayloadAction<string>)=>{
      state.title = action.payload
    },

    addIntro: (state,action : PayloadAction<string>)=>{
      state.intro = action.payload
    },
    setWorkingResume: (state,action : PayloadAction<Resume>)=>{
      const resume = action.payload
      state.intro = resume.intro
      state.title = resume.title
      state.name = resume.name
    },
    resetWorkingResume: (state)=>{
      state.intro = ''
      state.name = ''
      state.title = ''
    },
  },
  
});
export const {addName ,setWorkingResume, addTitle, addIntro, resetWorkingResume} = workingResumeSlice.actions

export default workingResumeSlice.reducer;
