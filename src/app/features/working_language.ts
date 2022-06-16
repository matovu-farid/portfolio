import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language } from "../../interfaces/language";


export interface WorkingLanguageState {
  name: string;
  image: string;
}

const initialState: WorkingLanguageState = {
  name : '',
  image: '',

};

export const workingLanguageSlice = createSlice({
  name: "working language",
  initialState,
  reducers: {
    addName: (state,action : PayloadAction<string>)=>{
      state.name = action.payload
    },

    addImage: (state,action : PayloadAction<string>)=>{
      state.image = action.payload
    },
    setWorkingLanguage: (state,action : PayloadAction<Language>)=>{
      const language = action.payload
      state.image = language.image
      state.name = language.name
    },
    resetWorkingLanguage: (state)=>{
      state.image = ''
      state.name = ''

    },
  },
  
});
export const {addName ,setWorkingLanguage, addImage, resetWorkingLanguage} = workingLanguageSlice.actions

export default workingLanguageSlice.reducer;
