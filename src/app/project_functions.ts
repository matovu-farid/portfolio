import { collection, deleteDoc, getDocs,getDoc, addDoc, doc,DocumentSnapshot, updateDoc } from "firebase/firestore"; 

import { Project } from "../interfaces/project";
import { db } from "./db";

const fetchAll = async ()=>{
 
  const docs = await getDocs(collection(db, "projects"))
 let promises: any = []
  docs.forEach(doc=>promises.push(getDoc(doc.ref)))

 const projects = (await Promise.all(promises)).map(snap=>({...snap.data(),id: snap.id}))
 return projects
}
const addProject = async (project: Project)=>{
  return addDoc(collection(db, "projects"), project)

}

const updateProject = async (project:any)=>{
  let docRef = doc(collection(db, "projects"),project.id)

  return updateDoc(docRef, project)
}
const deleteProject = async (project: Project)=>{
   let docRef = doc(collection(db, "projects"),project.id)
  return deleteDoc(docRef)

}

export {fetchAll,addProject, updateProject, deleteProject}

