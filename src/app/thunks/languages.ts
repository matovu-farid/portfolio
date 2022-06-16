import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Language } from "../../interfaces/language";
import {
  createLanguage,
  deleteLanguage,
  readLanguages,
  updateLanguage,
} from "../firebase/languages";
import { LANGUAGESCOLLECTION } from "../helpers/constants";
import { toastMessege } from "../helpers/toast_messege";



export const languageFetch = () =>
  createAsyncThunk(`${LANGUAGESCOLLECTION}/fetch`, readLanguages);
    


export const languageUpdate = () =>
  createAsyncThunk(`${LANGUAGESCOLLECTION}/update`, async (language: any) => {
    await toast.promise(
      updateLanguage(language),
      toastMessege("Update",'Language')
    );

    return language;
  });

export const languageAdd = () =>
  createAsyncThunk(`${LANGUAGESCOLLECTION}/add`, async (language: Language) => {
    await toast.promise(
      createLanguage(language),
      toastMessege("Add","Language")
    );
    return language;
  });
export const languageDelete = () =>
  createAsyncThunk(`${LANGUAGESCOLLECTION}/delete`, async (language: Language) => {
    await toast.promise(
      deleteLanguage(language),
      toastMessege("Delete","Language")
    );
    return language;
  });
