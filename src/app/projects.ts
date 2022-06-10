import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Project } from '../interfaces/project'
import { deleteProject, fetchAll, updateProject } from './project_functions'

// First, create the thunk
export const fetchAllProjects = createAsyncThunk(
  'projects/fetch',
  async () => {
    const projects = await fetchAll()
    return projects
  }
)
export const updateAProject= createAsyncThunk(
  'projects/update',
  async (project: any) => {
    return await updateProject(project)
    
  }
)
export const deleteAProjects = createAsyncThunk(
  'projects/fetch',
  async (project:Project) => {
    const projects = await deleteProject(project)
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
    builder.addCase(fetchAllProjects.fulfilled, (state, action) => {
      state.all = action.payload
    })
    builder.addCase(updateAProject.fulfilled, (state, action:PayloadAction<any>) => {
         state.all = state.all.map(project=> {
         if(project.id === action.payload.id){
          return action.payload
         }
         return project
        })
    })
    builder.addCase(deleteAProjects.fulfilled, (state, action:PayloadAction<any>) => {
      state.all = state.all.filter(project=>project.id === action.payload.id)
 })
  },
})


export default projectSlice.reducer