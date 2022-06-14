import React, { Suspense, useEffect } from 'react';

import './App.css';
import { fetchAllProjects } from './app/projects'
import { useAppDispatch } from './app/hooks';
import Projects from './pages/Projects';
import { Routes, Route } from 'react-router-dom';
import AddProjects from './pages/AddProjects';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { fetchAllFavs } from './app/favs';
import Favourites from './pages/Favorites';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchAllProjects())
    dispatch(fetchAllFavs())
    
  },[])
  return (
    <div className="App">
      <div className='flex'>
        <div>
        <Sidebar/>
        </div>
        <div className='w-28'>

        </div>

        <div className="flex-1 ">
          <ToastContainer />
          

            <Routes >
              <Route path='/' element={ <Projects />} />
              <Route path='/addproject' element={ <AddProjects />} />  
              <Route path='/favorites' element={ <Favourites />} />  
              <Route path='/projects/:id' element={ <ProjectDetails />} />  


            </Routes>

        </div>

      </div>

      
    </div>
  );
}

export default App;
