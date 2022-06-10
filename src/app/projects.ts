import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// First, create the thunk
const fetchUserById = createAsyncThunk(
  'projects/fetch',
  async () => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)
export interface Project {
  name: string,
  description: string,
  github: string,
  image: string,
  tags: string[]
}
export interface ProjectState {
  value: Project[]
}

const initialState: ProjectState = {
  value: [],
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = projectSlice.actions

export default projectSlice.reducer