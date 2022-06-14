import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Project } from "../interfaces/project";
import { addProject, deleteProject, fetchAll, updateProject } from "./project_functions";

const toastMessege = (context:string)=>{
  const lowercased= context.toLowerCase()
 return {
   pending: `${context} loading...⏳`,
   error: `${context} failed 🤯`,
   success: `Project ${lowercased} successful 😊`

 }
}

export const projectFetch = (currentCollection:string)=>
createAsyncThunk(`${currentCollection}/fetch`, async () => {
  const projects = await fetchAll(currentCollection);
  return projects;
});

export const projectUpdate = (currentCollection:string)=>createAsyncThunk(
  `${currentCollection}/update`,
  async (project: any) => {
     await toast.promise(updateProject(project,currentCollection),toastMessege('Update'))
   
   
    return project;
  }
);

export const projectAdd = (currentCollection:string)=>createAsyncThunk(
  `${currentCollection}/add`,
  async (project: Project) => {
    
    await toast.promise(addProject(project,currentCollection),toastMessege('Add'));
    return project;
  }
);
export const projectDelete = (currentCollection:string)=>createAsyncThunk(
  `${currentCollection}/delete`,
  async (project: Project) => {
    await toast.promise(deleteProject(project,currentCollection),toastMessege('Delete'));
    return project;
  }
);


