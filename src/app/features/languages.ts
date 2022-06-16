import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language } from "../../interfaces/language";


import { languageAdd, languageDelete, languageFetch, languageUpdate } from "../thunks/languages";

// First, create the thunk
export const fetchAllLanguages = languageFetch();
export const updateALanguage = languageUpdate();
export const addALanguage = languageAdd();
export const deleteALanguage = languageDelete();


export interface LanguageState {
  all: Language[];
  loading: boolean;

}

const initialState: LanguageState = {
  all: [],
  loading: true,


};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder.addCase(fetchAllLanguages.fulfilled, (state, action) => {
      state.all = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllLanguages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addALanguage.fulfilled, (state, action) => {
      state.all.push(action.payload);
    });

    builder.addCase(
      updateALanguage.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.all = state.all.map((language) => {
          if (language.id === action.payload.id) {
            return action.payload;
          }
          return language;
        });
      }
    );

    builder.addCase(
      deleteALanguage.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.all = state.all.filter(
          (language) => language.id !== action.payload.id
        );
      }
    );

  },
});
export default languageSlice.reducer;
