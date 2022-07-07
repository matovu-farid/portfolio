import {
  collection,
  deleteDoc,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { Resume } from "../../interfaces/resume";

import { db } from "../db";

const readResumes = async (currentCollection: string) => {
  const docs = await getDocs(collection(db, currentCollection));
  let promises: any = [];
  docs.forEach((doc) => promises.push(getDoc(doc.ref)));

  const resumes = (await Promise.all(promises)).map((snap) => ({
    ...snap.data(),
    id: snap.id,
  }));
  return resumes;
};
const createResume = async (resume: Resume, currentCollection: string) => {
  return addDoc(collection(db, currentCollection), resume);
};

const updateResume = async (resume: any, currentCollection: string) => {
  let docRef = doc(collection(db, currentCollection), resume.id);

  return updateDoc(docRef, resume);
};
const deleteResume = async (resume: Resume, currentCollection: string) => {
  let docRef = doc(collection(db, currentCollection), "resume");
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
};

export {
  readResumes,
  createResume,
  updateResume,
  deleteResume,
};
