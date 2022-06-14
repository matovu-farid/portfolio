import { collection, deleteDoc, getDocs,getDoc, addDoc, doc, updateDoc } from "firebase/firestore"; 

import { Project } from "../interfaces/project";
import { db } from "./db";


const fetchAll = async (currentCollection:string)=>{
 
  const docs = await getDocs(collection(db, currentCollection))
 let promises: any = []
  docs.forEach(doc=>promises.push(getDoc(doc.ref)))

 const projects = (await Promise.all(promises)).map(snap=>({...snap.data(),id: snap.id}))
 return projects
}
const addProject = async (project: Project,currentCollection:string)=>{
  return addDoc(collection(db, currentCollection), project)

}

const updateProject = async (project:any,currentCollection:string)=>{
  let docRef = doc(collection(db, currentCollection),project.id)

  return updateDoc(docRef, project)
}
const deleteProject = async (project: Project,currentCollection:string)=>{
   let docRef = doc(collection(db, currentCollection),project.id)
   try {
    await deleteDoc(docRef)
   } catch (error) {
     console.log(error)
   }



}

export {fetchAll,addProject, updateProject, deleteProject}

