import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Resume } from "../../interfaces/resume";


import { resumeAdd, resumeDelete, resumeFetch, resumeUpdate } from "../thunks/resume";

// First, create the thunk
export const fetchAllResumes = resumeFetch("resumes");
export const updateAResume = resumeUpdate("resumes");
export const addAResume = resumeAdd("resumes");
export const deleteAResume = resumeDelete("resumes");


export interface ResumeState {
  all: Resume[];
  loading: boolean;
  searched: Resume[] | null;
  searchText: string;
}

const initialState: ResumeState = {
  all: [],
  searched: null,
  loading: true,
  searchText: '',

};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    search: (state,action)=>{

      state.loading = true
      state.searched = state.all.filter(resume =>
         resume.basic.name.toLocaleLowerCase().includes(action.payload))
         state.loading = false
    },
    addSearchText: (state,action)=>{
      state.searchText = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllResumes.fulfilled, (state, action) => {
      state.all = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllResumes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addAResume.fulfilled, (state, action) => {
      state.all.push(action.payload);
    });

    builder.addCase(
      updateAResume.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.all = state.all.map((resume) => {
          if ("" === action.payload.id) {
            return action.payload;
          }
          return resume;
        });
      }
    );

    builder.addCase(
      deleteAResume.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.all = state.all.filter(
          (resume) => "resume.id" !== action.payload.id
        );
      }
    );

  },
});
export const {search,addSearchText} = resumeSlice.actions;
export default resumeSlice.reducer;
