import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Project } from "../../interfaces/project";
import {
  createProject,
  deleteProject,
  readProjects,
  updateProject,
} from "../firebase/project";
import { toastMessege } from "../helpers/toast_messege";



export const projectFetch = (currentCollection: string) =>
  createAsyncThunk(`${currentCollection}/fetch`, async () => {
    const projects = await readProjects(currentCollection);
    return projects;
  });

export const projectUpdate = (currentCollection: string) =>
  createAsyncThunk(`${currentCollection}/update`, async (project: any) => {
    await toast.promise(
      updateProject(project, currentCollection),
      toastMessege("Update")
    );

    return project;
  });

export const projectAdd = (currentCollection: string) =>
  createAsyncThunk(`${currentCollection}/add`, async (project: Project) => {
    await toast.promise(
      createProject(project, currentCollection),
      toastMessege("Add")
    );
    return project;
  });
export const projectDelete = (currentCollection: string) =>
  createAsyncThunk(`${currentCollection}/delete`, async (project: Project) => {
    await toast.promise(
      deleteProject(project, currentCollection),
      toastMessege("Delete")
    );
    return project;
  });
