import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Skill } from "../../interfaces/skill";


export interface WorkingSkillState {
  name: string;
  image: string;
}

const initialState: WorkingSkillState = {
  name : '',
  image: '',

};

export const workingSkillSlice = createSlice({
  name: "working skill",
  initialState,
  reducers: {
    addName: (state,action : PayloadAction<string>)=>{
      state.name = action.payload
    },

    addImage: (state,action : PayloadAction<string>)=>{
      state.image = action.payload
    },
    setWorkingSkill: (state,action : PayloadAction<Skill>)=>{
      const skill = action.payload
      state.image = skill.image
      state.name = skill.name
    },
    resetWorkingSkill: (state)=>{
      state.image = ''
      state.name = ''

    },
  },
  
});
export const {addName ,setWorkingSkill, addImage, resetWorkingSkill} = workingSkillSlice.actions

export default workingSkillSlice.reducer;
