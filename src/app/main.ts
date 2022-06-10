// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc,getFirestore, deleteDoc, getDocs } from "firebase/firestore"; 
import * as fs from 'fs'
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
  console.log('removing...')
  const docs = await getDocs(collection(db, "projects"))
 let promises: any[] = []
  docs.forEach(doc=>promises.push(deleteDoc(doc.ref)))
 await Promise.all(promises)
}

const post = async ()=>{
  console.log('posting...')
  const projects = JSON.parse(fs.readFileSync('projects.json', 'utf8'));
  const promises: any[] = []
  projects.forEach((project: any)=>{
     promises.push(addDoc(collection(db, "projects"), project))   
  })
  await Promise.all(promises)

}

   post()
 // removeProjects()
