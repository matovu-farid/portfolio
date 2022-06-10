// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, deleteDoc, getDocs,getDoc } from "firebase/firestore"; 

import { Project } from "../interfaces/project";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkNtiaz14ygPZcpcWtjdMmiVzUJVMFopY",
  authDomain: "portfolio-ab4c9.firebaseapp.com",
  projectId: "portfolio-ab4c9",
  storageBucket: "portfolio-ab4c9.appspot.com",
  messagingSenderId: "876030951280",
  appId: "1:876030951280:web:3294a6914f52a47163d9b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const removeProjects = async()=>{
  const docs = await getDocs(collection(db, "projects"))
 let promises: any[] = []
  docs.forEach(doc=>promises.push(deleteDoc(doc.ref)))
 await Promise.all(promises)
}

// const post = async ()=>{
//   const projects = JSON.parse(readFileSync('projects.json', 'utf8'));
//   const promises: any[] = []
//   projects.forEach((project: any)=>{
//      promises.push(addDoc(collection(db, "projects"), project))   
//   })
//   await Promise.all(promises)

// }
const fetchAll = async ():Promise<Project[]>=>{
 
  const docs = await getDocs(collection(db, "projects"))
 let promises: any[] = []
  docs.forEach(doc=>promises.push(getDoc(doc.ref)))

 const projects = (await Promise.all(promises)).map(snap=>snap.data())
 return projects
}

export {fetchAll,removeProjects}

 // removeProjects()
