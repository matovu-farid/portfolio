import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { Language } from "../../interfaces/language"
import { db } from "../db"
import { LANGUAGECOLLECTION } from "../helpers/constants"


const readLanguages = async ()=>{
 
  const docs = await getDocs(collection(db, LANGUAGECOLLECTION))
 let promises: any = []
  docs.forEach(doc=>promises.push(getDoc(doc.ref)))

 return (await Promise.all(promises)).map(snap=>({...snap.data(),id: snap.id}))
 
}
const createLanguage = async (language: Language)=>{
  return addDoc(collection(db, LANGUAGECOLLECTION), language)

}

const updateLanguage = async (language:any)=>{
  let docRef = doc(collection(db, LANGUAGECOLLECTION),language.id)

  return updateDoc(docRef, language)
}
const deleteLanguage = async (language: Language)=>{
   let docRef = doc(collection(db, LANGUAGECOLLECTION),language.id)
   try {
    await deleteDoc(docRef)
   } catch (error) {
     console.log(error)
   }

 }

 export {readLanguages,createLanguage, updateLanguage, deleteLanguage}

