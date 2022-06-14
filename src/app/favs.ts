import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../interfaces/project";


import { projectAdd, projectDelete, projectFetch, projectUpdate } from "./thunks";



export const fetchAllFavs = projectFetch("favorites");
export const updateAFav = projectUpdate("favorites");
export const addAFav = projectAdd("favorites");
export const deleteAFav = projectDelete("favorites");
export interface FavsState {
 
  favs: Project[];
  loading: boolean;
  searched: Project[] | null;
  searchText: string;
}

const initialState: FavsState = {

  searched: null,
  loading: true,
  searchText: '',
  favs: [],
};

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    searchFav: (state,action)=>{

      state.loading = true
      state.searched = state.favs.filter(project =>
         project.name.toLocaleLowerCase().includes(action.payload))
         state.loading = false
    },
    addFavSearchText: (state,action)=>{
      state.searchText = action.payload
    }
  },
  extraReducers: (builder) => {
   
    builder.addCase(fetchAllFavs.fulfilled, (state, action) => {
      state.favs = action.payload;
      state.loading = false;
    });
   
    builder.addCase(fetchAllFavs.pending, (state) => {
      state.loading = true;
    });
    
    builder.addCase(addAFav.fulfilled, (state, action) => {
      state.favs.push(action.payload);
    });
   
    builder.addCase(
      updateAFav.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.favs = state.favs.map((project) => {
          if (project.id === action.payload.id) {
            return action.payload;
          }
          return project;
        });
      }
    );

    builder.addCase(
      deleteAFav.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.favs = state.favs.filter(
          (project) => project.id !== action.payload.id
        );
      }
    );
  },
});
export const {searchFav,addFavSearchText} = favsSlice.actions;
export default favsSlice.reducer;
