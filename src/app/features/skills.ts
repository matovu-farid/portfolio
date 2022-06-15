import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Skill } from "../../interfaces/skill";


import { skillAdd, skillDelete, skillFetch, skillUpdate } from "../thunks/skills";

// First, create the thunk
export const fetchAllSkills = skillFetch();
export const updateASkill = skillUpdate();
export const addASkill = skillAdd();
export const deleteASkill = skillDelete();


export interface SkillState {
  all: Skill[];
  loading: boolean;
  searched: Skill[] | null;
  searchText: string;
}

const initialState: SkillState = {
  all: [],
  searched: null,
  loading: true,
  searchText: '',

};

export const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder.addCase(fetchAllSkills.fulfilled, (state, action) => {
      state.all = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllSkills.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addASkill.fulfilled, (state, action) => {
      state.all.push(action.payload);
    });

    builder.addCase(
      updateASkill.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.all = state.all.map((skill) => {
          if (skill.id === action.payload.id) {
            return action.payload;
          }
          return skill;
        });
      }
    );

    builder.addCase(
      deleteASkill.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.all = state.all.filter(
          (skill) => skill.id !== action.payload.id
        );
      }
    );

  },
});
export default skillSlice.reducer;
