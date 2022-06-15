import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { Skill } from "../../interfaces/skill"
import { db } from "../db"
import { SKILLSCOLLECTION } from "../helpers/constants"


const readSkills = async ()=>{
 
  const docs = await getDocs(collection(db, SKILLSCOLLECTION))
 let promises: any = []
  docs.forEach(doc=>promises.push(getDoc(doc.ref)))

 return (await Promise.all(promises)).map(snap=>({...snap.data(),id: snap.id}))
 
}
const createSkill = async (skill: Skill)=>{
  return addDoc(collection(db, SKILLSCOLLECTION), skill)

}

const updateSkill = async (skill:any)=>{
  let docRef = doc(collection(db, SKILLSCOLLECTION),skill.id)

  return updateDoc(docRef, skill)
}
const deleteSkill = async (skill: Skill)=>{
   let docRef = doc(collection(db, SKILLSCOLLECTION),skill.id)
   try {
    await deleteDoc(docRef)
   } catch (error) {
     console.log(error)
   }

 }

 export {readSkills,createSkill, updateSkill, deleteSkill}

