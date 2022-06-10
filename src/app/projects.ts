import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Project } from '../interfaces/project'
import { fetchAll } from './project_functions'

// First, create the thunk
export const fetchAllProjects = createAsyncThunk(
  'projects/fetch',
  async () => {
    const projects = await fetchAll()
    return projects
  }
)
export interface ProjectState {
  all: Project[]
}

const initialState: ProjectState = {
  all: [],
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllProjects.fulfilled, (state, action) => {
      // Add user to the state array
      state.all = action.payload
    })
  },
})


export default projectSlice.reducer