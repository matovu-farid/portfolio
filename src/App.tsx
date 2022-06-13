import React, { useEffect } from 'react';

import './App.css';
import { fetchAllProjects } from './app/projects'
import { useAppDispatch } from './app/hooks';
import Projects from './components/Projects';

function App() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchAllProjects())
    
  },[])
  return (
    <div className="App">
      <Projects />
    </div>
  );
}

export default App;
