import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Resume } from "../../interfaces/resume";
import {
  createResume,
  deleteResume,
  readResumes,
  updateResume,
} from "../firebase/resume";
import { toastMessege } from "../helpers/toast_messege";



export const resumeFetch = (currentCollection: string) =>
  createAsyncThunk(`${currentCollection}/fetch`, async () => {
    const resumes = await readResumes(currentCollection);
    return resumes;
  });

export const resumeUpdate = (currentCollection: string) =>
  createAsyncThunk(`${currentCollection}/update`, async (resume: any) => {
    await toast.promise(
      updateResume(resume, currentCollection),
      toastMessege("Update")
    );

    return resume;
  });

export const resumeAdd = (currentCollection: string) =>
  createAsyncThunk(`${currentCollection}/add`, async (resume: Resume) => {
    await toast.promise(
      createResume(resume, currentCollection),
      toastMessege("Add")
    );
    return resume;
  });
export const resumeDelete = (currentCollection: string) =>
  createAsyncThunk(`${currentCollection}/delete`, async (resume: Resume) => {
    await toast.promise(
      deleteResume(resume, currentCollection),
      toastMessege("Delete")
    );
    return resume;
  });
