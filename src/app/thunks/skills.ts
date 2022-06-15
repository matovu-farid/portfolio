import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Skill } from "../../interfaces/skill";
import {
  createSkill,
  deleteSkill,
  readSkills,
  updateSkill,
} from "../firebase/skills";
import { SKILLSCOLLECTION } from "../helpers/constants";
import { toastMessege } from "../helpers/toast_messege";



export const skillFetch = () =>
  createAsyncThunk(`${SKILLSCOLLECTION}/fetch`, readSkills);
    


export const skillUpdate = () =>
  createAsyncThunk(`${SKILLSCOLLECTION}/update`, async (skill: any) => {
    await toast.promise(
      updateSkill(skill),
      toastMessege("Update",'Skill')
    );

    return skill;
  });

export const skillAdd = () =>
  createAsyncThunk(`${SKILLSCOLLECTION}/add`, async (skill: Skill) => {
    await toast.promise(
      createSkill(skill),
      toastMessege("Add","Skill")
    );
    return skill;
  });
export const skillDelete = () =>
  createAsyncThunk(`${SKILLSCOLLECTION}/delete`, async (skill: Skill) => {
    await toast.promise(
      deleteSkill(skill),
      toastMessege("Delete","Skill")
    );
    return skill;
  });
