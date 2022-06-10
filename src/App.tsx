import React, { useEffect } from 'react';

import './App.css';
import { fetchAllProjects } from './app/projects';
import { useAppDispatch } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchAllProjects())
    
  },[])
  return (
    <div className="App">
      No thing yet
    </div>
  );
}

export default App;
